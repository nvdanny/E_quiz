const Submission = require("../models/Submission");
const Exam = require("../models/Exam");
const User = require("../models/User");
const { startExam } = require("./examService");

module.exports = {
    doExam : async (data, user) => {
        try {
            const exam = await Exam.findById(data.id);
            const foundSubmission = await Submission.findOne({examId: exam._id, userId: user.id});
            const foundUser = await User.findById(user.id);
            if (!exam.active) {
                return {
                    error: "you can't do it for now"
                }
            }
            else if (foundSubmission) {
                return {
                    error: "you already did this exam"
                }
            }
            else if (foundUser.doingExam == true) {
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
                for (let question of exam.questions) {
                    if (submitedAnswer[question._id]) {
                        if (submitedAnswer[question._id] == question.answer._id) {
                            correctAnswer++;
                        }
                    }
                }
                const score = (correctAnswer / exam.questions.length) * 10;
                const formattedAnswers = Object.keys(submitedAnswer).map(questionId => ({
                    questionId: questionId,                         // Chuyển questionId thành ObjectId
                    optionId: submitedAnswer[questionId]            // Chuyển optionId thành ObjectId
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
            return {
                error: err,
            }
        }
    }
}