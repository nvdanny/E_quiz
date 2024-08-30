const express = require("express")
const router = express.Router();
const examController = require("../controllers/examController");
const { auth } = require("../middlewares/auth");

router.post("/create", [auth, admin], examController.createExam);
router.get("/list", [auth, admin], examController.getAllExam);
router.get("/:examId", auth, examController.getExam);
router.put("/update/:examId", [auth, admin], examController.getExam);
router.delete("/delete/:examId", [auth, admin], examController.deleteExam);

module.exports = router;