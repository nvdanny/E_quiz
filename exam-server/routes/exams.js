const express = require("express")
const router = express.Router();
const examController = require("../controllers/examController");
const { auth, admin } = require("../middlewares/auth");

router.post("/", [auth, admin], examController.createExam);
router.get("/list", [auth, admin], examController.getAllExam);
router.get("/:examId", auth, examController.getExam);
router.put("/:examId", [auth, admin], examController.editExam);
router.post("/updateStatus", [auth, admin], examController.updateStatus);
router.delete("/:examId", [auth, admin], examController.deleteExam);

module.exports = router;