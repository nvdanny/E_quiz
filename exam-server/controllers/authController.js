// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('../config');
const authService = require('../services/authService');

module.exports = {
  signUp : async (req, res) => {
    try {
      const response  = authService.signUp(req.body);
      if (response.error) {
        return res.status(400).json({ msg: response.error });
      }
      return res.status(200).json({ msg: "Sign up successfully"});
    }
    catch(err) {
      return res.status(500).json({ msg: "Server error" });
    }
  },
  
  signIn : async (req, res) => {
    try {
      const response = authService.signIn(req.body);
      if (response.error) {
        return res.status(400).json({ msg: response.error });
      }
      return res.status(200).json({ msg: "Sign in successfully" });
    }
    catch(err) {
      return res.status(500).json({ msg: "Server error" });
    }
  },
  forgetPassword: async(req, res) => {

  }
}
