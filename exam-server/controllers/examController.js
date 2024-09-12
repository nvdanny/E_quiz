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

  getActiveExam : async (req, res) => {
    try {
      const response = await examService.getActiveExam();
      if (response.error) {
        res.status(400).json(response.error);
      }
      else {
        res.status(200).json(response)
      }
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  },

  getExamById : async (req, res) => {
    try {
      const response = await examService.getExamById(req.params.examId, req.user);
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
      const response = await examService.getAllExam(req.user);
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

//   startExam: async (req, res) => {
//     try {
//       const data = req.body;
//       const response = await examService.startExam(data);
//       if (response.error) {
//         res.status(400).json({ msg: response.error });
//       }
//       else {
//         res.status(200).json({ msg: response })
//       }
//     }
//     catch (err) {
//       res.status(500).json({ msg: "Server Error" });
//     }
// },
}
