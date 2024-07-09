const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
  name: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  duration: { type: Number, required: true },
  logs: [{ userId: Schema.Types.ObjectId, score: Number, submittedAt: Date }],
});

module.exports = mongoose.model('Exam', examSchema);
