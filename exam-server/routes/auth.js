const express = require("express")
const router = express.Router();
const authController = require("../controllers/authController");
const { auth } = require("../middlewares/auth");

router.post("/sign-up", authController.signUp);

module.exports = router;