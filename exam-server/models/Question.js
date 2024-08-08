const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    options: [{
        text: String,
        isCorrect: Boolean,
        imageUrl: {
            type: String,
            required: false,
        }
    }],
  })

  module.exports = mongoose.model("Question", questionSchema);