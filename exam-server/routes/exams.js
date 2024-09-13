const express = require("express");
const router = express.Router();
const examController = require("../controllers/examController");
const { auth, admin } = require("../middlewares/auth");

router.post("/", [auth, admin], examController.createExam);
router.get("/list", auth, examController.getAllExam);
router.get("/:examId", auth, examController.getExamById);
router.get("/", auth, examController.getActiveExam);
router.put("/:examId", [auth, admin], examController.editExam);
router.put("/updateStatus", [auth, admin], examController.updateStatus);
router.get("/updateStatus", [auth, admin], examController.updateStatus);

router.delete("/:examId", [auth, admin], examController.deleteExam);

module.exports = router;
