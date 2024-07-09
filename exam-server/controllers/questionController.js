const Question = require('../models/Question');

exports.addQuestion = async (req, res) => {
  const { text, options } = req.body;
  try {
    const newQuestion = new Question({ text, options });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
