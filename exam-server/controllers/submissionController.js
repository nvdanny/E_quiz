const submissionService = require("../services/submissionService")


module.exports = {
  doExam : async (req, res) => {
    try {
      const data = req.body;
      const user = req.user;
      const response = await submissionService.doExam(data, user);
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

  submitExam : async (req, res) => {
    try {
      const data = req.body;
      const user = req.user;
      const response = await submissionService.submitExam(data, user);
      if (response.error) {
        res.status(400).json({msg: response.error})
      }
      else {
        res.status(200).json({ msg: response })
      }
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },
}