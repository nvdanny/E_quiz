const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  duration: {
    type: Number,
    required: true 
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  questions : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required : false
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Exam', examSchema);
