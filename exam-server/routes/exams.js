const express = require("express")
const router = express.Router();
const examController = require("../controllers/examController");
const { auth, admin } = require("../middlewares/auth");

router.post("/", examController.createExam);
router.get("/list", examController.getAllExam);
router.get("/:examId", examController.getExam);
router.put("/:examId", examController.getExam);
router.delete("/:examId", examController.deleteExam);

module.exports = router;