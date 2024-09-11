const Submission = require("../models/Submission");
const Exam = require("../models/Exam");
const User = require("../models/User");
const { startExam } = require("./examService");

module.exports = {
    doExam : async (user) => {
        try {
            // const exam = await Exam.findById(data.id);
            // const foundSubmission = await Submission.findOne({examId: exam._id, userId: user.id});
            const foundUser = await User.findById(user.id);
            // if (!exam.active) {
            //     return {
            //         error: "you can't do it for now"
            //     }
            // }
            // else if (foundSubmission) {
            //     return {
            //         error: "you already did this exam"
            //     }
            // }
            if (foundUser.doingExam == true) {
                return {
                    error: "you r doing another exam"
                }
            }
            else {
                foundUser.set({
                    doingExam: true,
                    startExam: Date.now(),
                })
                await foundUser.save();
                return {
                    success: true,
                    msg: "Oke"
                }
            }
        }
        catch(err) {
            return {
                error: err
            }
        }
    },
    submitExam : async (data, user) => {
        try {
            const exam = await Exam.findById(data.id).populate({path: 'questions'});
            const questions = exam.questions;
            const foundSubmission = await Submission.findOne({examId: data.id, userId: user.id});
            const foundUser = await User.findById(user.id);
            const submitedAnswer = data.answer;
            foundUser.set({
                doingExam: false,
            })
            await foundUser.save();
            if (foundSubmission) {
                return {
                    error: "you already did this exam"
                }
            }
            else if (foundUser.startExam + exam.duration * 60000 > Date.now() + 300000) {
                let correctAnswer = 0;
                for (let i = 0; i < questions.length; i++) {
                    if (submitedAnswer[i]) {
                        if (questions[i].options[submitedAnswer[i]]._id == questions[i].answer._id) {
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
                    error: 'Time out'
                }
            }
        }
        catch(err) {
            console.log(err)
            return {
                error: err,
            }
        }
    }
}