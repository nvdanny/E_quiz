const questionService = require('../services/questionService');

module.exports = {
  createQuestion : async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;
      const response = await questionService.createQuestion(data, file);
      console.log(response)
      if (response.error) {
        res.status(400).json({ msg: 'Unable to create question' });
      }
      res.status(200).json({ msg: response });
    }
    catch(err) {
      res.status(500).json({ msg: "Server Error" });
    }
  },

  editQuestion: async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;
      const response = await questionService.editQuestion(data, file);
      if (response.error) {
        res.status(400).json({ msg: 'Unable to edit question' });
      }
      res.status(200).json({ msg: response })
    }
    catch(err) {
      res.status(500).json({ msg: "Server Error" });
    }
  },

  deleteQuestion: async (req, res) => {
    try {
      const data = req.body;
      const response = await questionService.deleteQuestion(data);
      if (response.error) {
        res.status(400).json({msg: response.error})
      }
      res.status(200).json({ msg: response })
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  },

  getQuestion : async (req, res) => {
    try {
      const data = req.body;
      const response = await questionService.getOneQuestion(data);
      if (response.error) {
        res.status(400).json({ msg: 'Error' });
      }
      res.status(200).json({ msg: response })
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
      res.status(200).json({ msg: response });
    }
    catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  },

}
