// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('../config');
const authService = require('../services/authService');
const mailService = require('../services/mailService')

module.exports = {
  signUp : async (req, res) => {
    try {
      const response  = await authService.signUp(req.body);
      if (response.error) {
        return res.status(400).json({ msg: response.error });
      }
      mailService.sendMail(response.data.email, mailService.registerContent);
      return res.status(200).json(response);
    }
    catch(err) {
      return res.status(500).json({ msg: err });
    }
  },
  
  signIn : async (req, res) => {
    try {
      const response = await authService.signIn(req.body);
      if (response.error) {
        return res.status(400).json({ msg: response.error });
      }
      mailService.sendMail(response.data.email, mailService.registerContent);
      return res.status(200).json(response);
    }
    catch(err) {
      console.log(err)
      return res.status(500).json({ msg: "Server error" });
    }
  },

  signOut: async (req, res) => {
    try {
      res.clearCookie("accessToken");
      return res.status(200).json("Sign out successfully");
    }
    catch(err) {
      console.log(err)
      return res.status(500).json({ msg: "Server error" });
    }
  },

  forgetPassword: async(req, res) => {

  }
}
