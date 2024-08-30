const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true,
    },
    text: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    }
});

const questionSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    options: [optionSchema],
    answer: {
        type: optionSchema,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
      },
    updatedAt: {
        type: Date,
        default: Date.now
    },
  })

  module.exports = mongoose.model("Question", questionSchema);