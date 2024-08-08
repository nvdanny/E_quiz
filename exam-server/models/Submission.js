const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    examId :{ 
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Exam',
        required : true
    },
    userid : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    result: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subResultsModel',
        required : true
    }
    ],
    score :{
        type : Number,
        default : 0
    }
});

module.exports = mongoose.model('Submission', submissionSchema);