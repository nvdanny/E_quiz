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
  // startTime: {
  //   type: Date,
  //   required: true
  // },
  // end: {
  //   type: Boolean,
  //   required: true
  // },
  questions : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required : false
  }],
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now
  // },
  active :{
    type: Boolean,
    default:false
  }
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);
