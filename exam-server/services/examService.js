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
                questions: data.questions 
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
                active: data.active,
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

    getActiveExam: async () => {
        try {
            var exams;
            exams = await Exam.find({active: true}).populate({path: 'questions', select: '-answer'});
            if (exams.length == 0) {
                return {
                    error: "No active exam available",
                }
            }
            else {
                let randomExam = exams[Math.floor(Math.random() * exams.length)];
                return {
                    exam: randomExam,
                }
            }
        }
        catch(err) {
            console.log(err);
            return {
                error: "Server Error",
            }
        }
    },

    getExamById: async (id, user) => {
        try {
            var foundExam;
            if (user.role == 'admin') {
                foundExam =  await Exam.findById(id).populate({path: 'questions'});
            }
            else {
                foundExam =  await Exam.findById(id).populate({path: 'questions', select: '-answer'});
            }
            if (foundExam) {
                return {
                    success: true,
                    foundExam
                }
            }
            else {
                return {
                    error: "Exam not found"
                }
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },

    getAllExam: async (user) => {
        try {
            var exams;
            if (user.role == 'admin') {
                exams = await Exam.find().populate({path: 'questions'});
            }
            else {
                exams = await Exam.find({active: true}).populate({path: 'questions', select: '-answer'});
            }
            return {
                exams
            }
        }
        catch(err) {
            return {
                error: err,
            }
        }
    },
    deleteExam: async (id) => {
        try {
            const deletedExam = await Exam.findByIdAndDelete(id);
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

    updateStatus: async (data) => {
        try {
            const exam = await Exam.findById(data.id)
            if (!exam) {
                return {
                    error: "Exam not found"
                }
            }
            exam.set({
                active: data.active
            });
            await exam.save();
            return {
                success: true,
                msg: "Update status Successfully",
                exam
            }
        }
        catch(err) {
            return {
                error: err,
            }
        }
    },
    // startExam : async (data) => {
    //     try {
    //         const exam = await Exam.findById(data.id);
    //         if (!exam) {
    //             return {
    //                 error: "exam not found"
    //             }
    //         }
    //         exam.set({
    //             startTime: new Date(),
    //         })
    //         await exam.save();
    //         return {
    //             success: true,
    //             msg: "Oke"
    //         }
    //     }
    //     catch(err) {
    //         return {
    //             error: err,
    //         }
    //     }
    // },

}