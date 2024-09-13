const mongoose = require('mongoose');
const Question = require('../models/Question');

module.exports = {
    createQuestion: async (data, files) => {
        try {
<<<<<<< HEAD
            data.options = JSON.parse(data.options)
            const savedOptions = data.options.map((option, i) => {
                let image = `options[${i+1}]`
                if (files && files[image]) {
=======
            // data.options = JSON.parse(data.options)
            const savedOptions = data.options.map((option, i) => {
                let image = `options[${i+1}]`
                if (files[image]) {
>>>>>>> origin/master
                    var path = files[image][0]?.path
                }
                return {
                    _id: new mongoose.Types.ObjectId(),
                    text: option.text,
                    imageUrl: path || option.imageUrl
                }
            });
            const savedAnswer = savedOptions[data.answer];
<<<<<<< HEAD
            if (files && files['image']) {
=======
            if (files['image']) {
>>>>>>> origin/master
                var pathQuestion = files['image'][0]?.path
            }
            const newQuestion = await Question.create({
                description: data.description,
                imageUrl: pathQuestion,
                options: savedOptions,
                answer: savedAnswer,
            })
            return {
                success: true,
                msg: "New Question Created Successfully",
                newQuestion
            }
        }
        catch(err) {
            return {
                error: err,
            }
        }
    },

    getOneQuestion: async (id) => {
        try {
            const question = await Question.findById(id).populate({path: 'options'})
            if (!question) {
                return {
                    error: "question not found"
                }
            }
            return {
                question: question,
            }
        }
        catch(err) {
            return {
                error: err,
            }
        }
    },

    getAllQuestion: async (data) => {
        try {
            const questions = await Question.find().sort({ createdAt: -1 });
            if (!questions) {
                return {
                    error: "question not found"
                }
            }
            return {
                questions: questions,
            }
        }
        catch(err) {
            return {
                error: err,
            }
        }
    },

    editQuestion: async (data, files) => {
        try {
<<<<<<< HEAD
            data.options = JSON.parse(data.options)
=======
            // data.options = JSON.parse(data.options)
>>>>>>> origin/master
            const savedOptions = data.options.map((option, i) => {
                let image = `options[${i+1}]`
                if (files[image]) {
                    var path = files[image][0]?.path
                }
                return {
                    _id: new mongoose.Types.ObjectId(),
                    text: option.text,
                    imageUrl: path || option.imageUrl
                }
            });
            const savedAnswer = savedOptions[data.answer];
            if (files['image']) {
                var pathQuestion = files['image'][0]?.path
            }
            const question = await Question.findByIdAndUpdate(data.id, {
                description: data.description,
<<<<<<< HEAD
                imageUrl: pathQuestion,
=======
                imageUrl: files[0].path,
>>>>>>> origin/master
                options: savedOptions,
                answer: savedAnswer
            })
            if (question) {
                return {
                    success: true,
                    msg: "Update Question Successfully",
                    question
                }
            }
            else {
                return {
                    error: "loi"
                }
            }
        }
        catch(err) {
            return {
                error: err
            }
        }
    },
    deleteQuestion: async (id) => {
        try {
            const deletedQuestion = await Question.findByIdAndDelete(id);
            if (!deletedQuestion) {
                return {
                    error: 'Question not found'
                }
            }
            return {
                msg: 'Question deleted successfully'
            }
        }
        catch(err) {
            return {
                error: err
            }
        }
    }
}