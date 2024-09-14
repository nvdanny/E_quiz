const Submission = require("../models/Submission");
const Exam = require("../models/Exam");
const User = require("../models/User");
const { startExam } = require("./examService");

module.exports = {
    doExam : async (user) => {
        try {
            const foundUser = await User.findById(user.id);
            if (foundUser.didExam) {
                const currentTime = Date.now();
                const timeDifference = currentTime - foundUser.startExam;
                const twentyMinutesInMilliseconds = 20 * 60 * 1000;
                if (timeDifference <= 0 || timeDifference >= twentyMinutesInMilliseconds) {
                    return {
                        success: false,
                        msg: "You already did this test"
                    }
                }
            }
            else {
                foundUser.set({
                    startExam: Date.now(),
                    didExam: true,
                })
                await foundUser.save();
            }
            return {
                success: true,
                msg: "Oke"
            }
        }
        catch(err) {
            console.log(err)
            return {
                success: false,
                msg: "Server Error"
            }
        }
    },
    submitExam : async (data, user) => {
        try {
            const exam = await Exam.findById(data.id).populate({path: 'questions'});
            const questions = exam.questions;
            const foundSubmission = await Submission.findOne({userId: user.id});
            const foundUser = await User.findById(user.id);
            const submitedAnswer = data.answers;
            if (foundSubmission) {
                return {
                    success: false,
                    error: "you already did this exam"
                }
            }
            if (foundUser.startExam + exam.duration * 60000 > Date.now() + 300000) {
                let correctAnswer = 0;
                for (let i = 0; i < questions.length; i++) {
                    if (submitedAnswer[i] != undefined || submitedAnswer[i] != null) {
                        if (questions[i].options[submitedAnswer[i]]._id.toString() === questions[i].answer._id.toString()) {
                            correctAnswer++;
                        }
                    }
                }
                const score = (correctAnswer / exam.questions.length) * 10;
                const formattedAnswers = Object.keys(submitedAnswer).map(questionIndex => ({
                    questionId: questions[questionIndex]._id,
                    optionId: questions[questionIndex].options[submitedAnswer[questionIndex]]
                  }));
                await Submission.create({
                    examId: data.id,
                    userId: user.id,
                    answer: formattedAnswers,
                    score: score,
                })
                return {
                    success: true,
                    score
                }
            }
            else {
                return {
                    success: false,
                    msg: 'Time out'
                }
            }
        }
        catch(err) {
            console.log(err)
            return {
                success: false,
                error: "loi",
            }
        }
    },

    
}