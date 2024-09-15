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
            // if (foundUser.doingExam == true) {
            //     return {
            //         success: true,
            //         error: "you r doing another exam"
            //     }
            // }
            // else {
                foundUser.set({
                    doingExam: false,
                    startExam: Date.now(),
                })
                await foundUser.save();
                return {
                    success: true,
                    msg: "Oke"
                }
            // }
        }
        catch(err) {
            console.log(err)
            return {
                error: err
            }
        }
    },
    submitExam : async (data, user) => {
        try {
            const foundSubmission = await Submission.findOne({userId: user._id});
            const foundUser = await User.findById(user._id);
            if (foundSubmission || (foundUser && foundUser.doingExam)) {
                return {
                    success: false,
                    error: "Bạn đã hoàn thành bài thi rồi!"
                }
            }
            const exam = await Exam.findById(data.id).populate({path: 'questions'});
            const questions = exam.questions;
            console.error(foundUser)
            const submitedAnswer = data.answers;
            
            foundUser.set({
                doingExam: true,
            })
            await foundUser.save();

            if (foundUser.startExam + exam.duration * 60000  + 300000> Date.now()) {
                let correctAnswer = 0;
                for (let i = 0; i < questions.length; i++) {
                    if (submitedAnswer[i] != undefined || submitedAnswer[i] != null) {
                        if (questions[i].options[submitedAnswer[i]]._id.toString() === questions[i].answer._id.toString()) {
                            correctAnswer++;
                        }
                    }
                } foundUser.set({
                    doingExam: true,
                })
                await foundUser.save();
                const score = (correctAnswer / exam.questions.length) * 10;
                const formattedAnswers = Object.keys(submitedAnswer).map(questionIndex => ({
                    questionId: questions[questionIndex]._id,
                    optionId: questions[questionIndex].options[submitedAnswer[questionIndex]]
                  }));
                await Submission.create({
                    examId: data.id,
                    userId: user._id,
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
                    userId: user._id,
                    answer: formattedAnswers,
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
    }
}