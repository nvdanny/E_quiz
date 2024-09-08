const express = require("express")
const router = express.Router();
const authController = require("../controllers/authController");
const { auth } = require("../middlewares/auth");

router.post("/sign-up", authController.signUp);
router.post("/sign-in", authController.signIn);
router.post("/sign-out", auth, authController.signOut);

module.exports = router;