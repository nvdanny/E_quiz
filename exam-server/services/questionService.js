const Question = require('../models/Question');

module.exports = {
    createQuestion: async (data) => {
        try {
            const newQuestion = await Question.create({
                description: data.description,
                imageUrl: data.imageUrl,
                
            })
        }
        catch(err) {
            return {
                error: err,
            }
        }
    },

    getOneQuestion: async (data) => {
        
    }
}