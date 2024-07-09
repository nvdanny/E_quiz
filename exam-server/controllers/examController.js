const Exam = require('../models/Exam');

exports.createExam = async (req, res) => {
  const { name, questions, duration } = req.body;
  try {
    const newExam = new Exam({ name, questions, duration });
    await newExam.save();
    res.status(201).json(newExam);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getCurrentExam = async (req, res) => {
  try {
    const exam = await Exam.findOne().populate('questions');
    res.json(exam);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.submitExam = async (req, res) => {
  const { userId, answers } = req.body;
  try {
    const exam = await Exam.findOne().populate('questions');
    let score = 0;
    exam.questions.forEach((question, index) => {
      if (question.options[answers[index]].isCorrect) {
        score++;
      }
    });

    exam.logs.push({ userId, score, submittedAt: new Date() });
    await exam.save();

    res.json({ score });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
