const questionService = require('../services/questionService');

module.exports = {
  createQuestion : async (req, res) => {
    try {
      const data = req.body;
      const files = req.files;
      const response = await questionService.createQuestion(data, files);
      if (response.error) {
        console.log(response)
        res.status(400).json({ msg: 'Unable to create question'});
      }
      else {
        res.status(200).json({ msg: response });
      }
    }
    catch(err) {
      res.status(500).json({ msg: "Server Error" });
    }
  },

  editQuestion: async (req, res) => {
    try {
      const data = req.body;
      const files = req.files;
      const response = await questionService.editQuestion(data, files);
      if (response.error) {
        res.status(400).json({ msg: 'Unable to edit question' });
      }
      else {
        res.status(200).json({ msg: response })
      }
    }
    catch(err) {
      res.status(500).json({ msg: "Server Error" });
    }
  },

  deleteQuestion: async (req, res) => {
    try {

      const response = await questionService.deleteQuestion(req.params.questionId);
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

  getQuestion : async (req, res) => {
    try {
      const response = await questionService.getOneQuestion(req.params.questionId);
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
  
  getAllQuestion: async (req, res) => {
    try {
      const data = req.body;
      const response = await questionService.getAllQuestion(data);
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

}
