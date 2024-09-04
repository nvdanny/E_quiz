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
    required: false
  },
  end: {
    type: Date,
    required: false
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
