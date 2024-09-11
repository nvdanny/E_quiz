const express = require("express")
const router = express.Router();
const submissionController = require('../controllers/submissionController');
const { auth } = require("../middlewares/auth");

router.post("/", auth, submissionController.doExam);
router.post("/submit", auth, submissionController.submitExam);

module.exports = router;