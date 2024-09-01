const express = require("express")
const router = express.Router();
const questionController = require("../controllers/questionController");
const { auth, admin } = require("../middlewares/auth");
const uploadCloud = require("../middlewares/uploader");

// router.post("/create", [auth, admin, uploadCloud.single("img")], questionController.createQuestion);
router.post("/", [auth, admin], questionController.createQuestion);
router.get("/list", [auth, admin], questionController.getAllQuestion);
router.get("/:questionId", auth, questionController.getQuestion);
// router.put("/update/:questionId", [auth, admin, uploadCloud.single("img")], questionController.editQuestion);
router.put("/:questionId", [auth, admin], questionController.editQuestion);
router.delete("/:questionId", [auth, admin], questionController.deleteQuestion);

module.exports = router;