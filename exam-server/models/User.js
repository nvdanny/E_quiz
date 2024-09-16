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
  displayName: {
    type: String, 
    required: false,
  },
  region: {
    type: String,
    required: false,
  },
  identityCard: {
    type: String,
    required: false,
  },
  doingExam: {
    type: Boolean,
    default: false,
  },
  startExam: {
    type: Number,
    default: 1704067200000,
  },
  submission: { 
    type: Schema.ObjectId, 
    ref: "Submission" 
  },
  examShift: {
    type: Number,
    default: 1
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
