const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
    score: {type: Number, required: true, },
    createdAt: { type: Date, default: Date.now},
    examId: {type: Schema.ObjectId, ref: "Exam"},
});

module.exports = mongoose.model('Submission', submissionSchema);
