const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const question = new Schema({
  description: { type: String, required: true },
  imageUrl: {type: String},
  options: [{ text: String, isCorrect: Boolean }],
})

const examSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  duration: { type: Number, required: true },
  start: {type: Date, required: true},
  end: {type: Date, required: true},
  questions: [question],
  // logs: [{ userId: Schema.Types.ObjectId, score: Number, submittedAt: Date }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Exam', examSchema);
