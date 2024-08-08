const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  birthday: {type: String, required: true},
  password: { type: String, required: true },
  email: {type: String, required: true, unique: true},
  phoneNumber: {type: String, required: true, unique: true},
  university: {type: String, required: true},
  major: {type: String, required: true},
  year: {type: Number, required: true},
  studentId: {type: String, required: false},
  linkFb: {type: String, required: true},
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  submission: { type: Schema.ObjectId, ref: "Submission" }
});

module.exports = mongoose.model('User', userSchema);
