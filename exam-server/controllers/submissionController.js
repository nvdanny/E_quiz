const submissionService = require("../services/submissionService")


module.exports = {
  doExam : async (req, res) => {
    try {
      // const data = req.body;
      const user = req.user;
      const response = await submissionService.doExam(user);
      if (response.success) {
        res.status(200).json(response)
      }
      else {
        res.status(400).json(response)
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({success: false, msg: 'Server error' });
    }
  },

  submitExam : async (req, res) => {
    try {
      const data = req.body;
      const user = req.user;
      const response = await submissionService.submitExam(data, user);
      if (response.success) {
        res.status(200).json(response)
      }
      else {
        res.status(400).json(response)
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({ success: false, msg: "Server error" });
    }
  },
}