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
            const foundExam =  await Exam.findById(newExam._id).populate({path: 'questions'});
            return {
                success: true,
                msg: "New Exam Created Successfully",
                foundExam
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
            if (!newExam) {
                return {
                    error: "Exam not found"
                }
            }
            const foundExam =  await Exam.findById(newExam._id).populate({path: 'questions'});
            return {
                success: true,
                msg: "Edit exam Successfully",
                foundExam
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

    getAllExam: async () => {
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
    },
    deleteExam: async (data) => {
        try {
            const deletedExam = await Exam.findByIdAndDelete(data.id);
            if (!deletedExam) {
                return {
                    error: 'Exam not found'
                }
            }
            return {
                msg: 'Exam deleted successfully'
            }
        }
        catch(err) {
            return {
                error: err
            }
        }
    },

    startExam : async (data) => {
        try {
            const exam = await Exam.findById(data.id);
            
        }
        catch(err) {
            return {
                error: err,
            }
        }
    }
    
}