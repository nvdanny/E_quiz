const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  birthday: {type: String, required: true},
  password: { type: String, required: true },
  email: {type: String, required: true, unique: true},
  phoneNumber: {type: String, required: true, unique: true},
  region: {type: String, required: false},
  university: {type: String, required: true},
  major: {type: String, required: true},
  year: {type: Number, required: true},
  studentId: {type: String, required: false},
  linkFb: {type: String, required: true},
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  doingExam: {
    type: Boolean,
    default: false,
  },
  startExam: {
    type: Number,
    required: false, 
  },
  submission: { 
    type: Schema.ObjectId, 
    ref: "Submission" 
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // },
  // updatedAt: {
  //     type: Date,
  //     default: Date.now
  // },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
