const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    },
    optionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
})

const submissionSchema = new Schema({
    examId :{ 
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Exam',
        required : true
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    answer: [answerSchema],
    score :{
        type : Number,
        default : 0
    },
    // alreadyStart: {
    //     type: Number,
    //     default: 0
    // }
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);