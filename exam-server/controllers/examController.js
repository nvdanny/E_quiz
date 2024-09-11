const examService = require('../services/examService');
const Exam = require('../models/Exam');

module.exports = {
  createExam : async (req, res) => {
    try {
      const data = req.body;
      const response = await examService.createExam(data);
      if (response.error) {
        res.status(400).json({ msg: 'Unable to create exam' });
      }
      else {
        res.status(200).json({ msg: response });
      }
    }
    catch(err) {
      res.status(500).json({ msg: "Server Error" });
    }
  },

  editExam: async (req, res) => {
    try {
      const data = req.body;
      const response = await examService.editExam(data);
      if (response.error) {
        res.status(400).json({ msg: 'Unable to edit exam' });
      }
      else {
        res.status(200).json({ msg: response })
      }
    }
    catch(err) {
      res.status(500).json({ msg: "Server Error" });
    }
  },

  deleteExam: async (req, res) => {
    try {
      const response = await examService.deleteExam(req.params.examId);
      if (response.error) {
        res.status(400).json({msg: response.error})
      }
      else {
        res.status(200).json({ msg: response })
      }
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  },

  getExam : async (req, res) => {
    try {
      const response = await examService.getExam(req.params.examId, req.user);
      if (response.error) {
        res.status(400).json({ msg: 'Error' });
      }
      else {
        res.status(200).json({ msg: response })
      }
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  },
  
  getAllExam: async (req, res) => {
    try {
      const data = req.body;
      const response = await examService.getAllExam(data);
      if (response.error) {
        res.status(400).json({ msg: 'Error' });
      }
      else {
        res.status(200).json({ msg: response });
      }
    }
    catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  },
  updateStatus: async (req, res) => {
    try {
      const data = req.body;
      const response = await examService.updateStatus(data);
      if (response.error) {
        res.status(400).json({ msg: 'Unable to update status exam' });
      }
      else {
        res.status(200).json({ msg: response })
      }
    }
    catch(err) {
      res.status(500).json({ msg: "Server Error" });
    }
  },

  startExam: async (req, res) => {
    try {
      const data = req.body;
      const response = await examService.startExam(data);
      if (response.error) {
        res.status(400).json({ msg: response.error });
      }
      else {
        res.status(200).json({ msg: response })
      }
    }
    catch (err) {
      res.status(500).json({ msg: "Server Error" });
    }
},

  // submitExam : async (req, res) => {
  //   const { userId, answers } = req.body;
  //   try {
  //     const exam = await Exam.findOne().populate('questions');
  //     let score = 0;
  //     exam.questions.forEach((question, index) => {
  //       if (question.options[answers[index]].isCorrect) {
  //         score++;
  //       }
  //     });
  
  //     exam.logs.push({ userId, score, submittedAt: new Date() });
  //     await exam.save();
  
  //     res.json({ score });
  //   } catch (err) {
  //     res.status(500).json({ msg: 'Server error' });
  //   }
  // },
}
