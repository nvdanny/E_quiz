const express = require("express")
const router = express.Router();
const submissionController = require('../controllers/submissionController');
const { auth,admin } = require("../middlewares/auth");

router.get("/", auth, submissionController.doExam);
router.post("/submit", auth, submissionController.submitExam);
router.get("/result", [auth, admin], submissionController.getAllSubmission);

module.exports = router;