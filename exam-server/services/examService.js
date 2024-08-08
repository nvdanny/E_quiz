const Exam = require('../models/Exam');

module.exports = {
    createExam : async (data) => {
        try {
            let newExam = new Exam({
                title: data.title,
                description: data.description,
                duration: data.duration,
                start: data.start,
                end: data.end,
                questions: data.questions,
            });
            newExam = await Exam.create(newExam);
            return {
                success: true,
                msg: "New Exam Created Successfully",
                newExam
            }
          } catch (err) {
            return {
                error: err,
            }
          }
    },

    editExam: async (data) => {
        try {
            const newExam = await Exam.findByIdAndUpdate(data.id, {
                title: data.title,
                description: data.description,
                duration: data.duration,
                start: data.start,
                end: data.end,
                questions: data.questions,
            })
            return {
                success: true,
                msg: "Edit exam successfully"
            }
        }
        catch(err) {
            return {
                error: err,
            }
        }
    },

    getExam: async (data) => {
        try {
            const foundExam =  await Exam.findById(data.id).populate({path: 'questions'});
            return {
                success: true,
                foundExam
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },

    getAllExam: async (data) => {
        try {
            const exams = await Exam.find().populate({path: 'questions'});
            return {
                success: true,
                exams
            }
        }
        catch(err) {
            return {
                error: err,
            }
        }
    }
    
}