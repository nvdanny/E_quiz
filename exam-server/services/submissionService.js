const Submission = require("../models/Submission");
const Exam = require("../models/Exam");
const User = require("../models/User");

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
                        success: true,
                        msg: "Failed"
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
            if (foundUser.didExam && foundSubmission) {
                return {
                    success: false,
                    error: "Bạn đã hoàn thành bài thi rồi!"
                }
            }
            if (foundUser.startExam + exam.duration * 60000  + 300000> Date.now()) {
                if (foundSubmission) {
                    await Submission.deleteMany({userId: user.id});
                }
                let correctAnswer = 0;
                for (let i = 0; i < questions.length; i++) {
                    if (submitedAnswer[i] != undefined || submitedAnswer[i] != null) {
                        if (questions[i].options[submitedAnswer[i]]._id.toString() === questions[i].answer._id.toString()) {
                            correctAnswer++;
                        }
                    }
                }
                const score = correctAnswer;
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
                await Submission.create({
                    examId: data.id,
                    userId: user.id,
                    score: 0,
                })
                return {
                    success: false,
                    error: 'Đã quá giờ nộp bài!'
                }
            }
        }
        catch(err) {
            console.log(err)
            return {
                success: false,
                error: "Lỗi hệ thống",
            }
        }
    },

    updateExamShift: async (user, shift) => {
        try {
            const foundUser = await User.findByIdAndUpdate(user.id, {examShift: shift});
            if (foundUser) {
                return {
                    success: true,
                    msg: "Up date exam shift successfully"
                }
            }
            else {
                return {
                    success: false,
                    msg: "error"
                }
            }
        }
        catch (err) {
            console.log(err);
            return {
                success: false,
                msg: "Server Error"
            }
        }
    },

    getAllSubmission : async() => {
        try {
            const submission = await Submission.find().populate({path: 'userId'});
            return {
                success: true,
                submission
            }
        }
        catch(err) {
            console.log(err)
            return {
                success: false,
                msg: "Server error"
            }
        }
    },


}