const express = require("express")
const router = express.Router();
const questionController = require("../controllers/questionController");
const { auth, admin } = require("../middlewares/auth");
const uploadCloud = require("../middlewares/uploader");

router.post("/create", [auth, admin, uploadCloud.fields([
    { name: 'image', maxCount: 1 },
    { name: 'options[0]', maxCount: 1 },
    { name: 'options[1]', maxCount: 1 },
    { name: 'options[2]', maxCount: 1 },
    { name: 'options[3]', maxCount: 1 }
])], questionController.createQuestion);
// router.post("/", [auth, admin], questionController.createQuestion);
router.get("/list", [auth, admin], questionController.getAllQuestion);
router.get("/:questionId", auth, questionController.getQuestion);
router.put("/:questionId", [auth, admin, uploadCloud.fields([
    { name: 'image', maxCount: 1 },
    { name: 'options[0]', maxCount: 1 },
    { name: 'options[1]', maxCount: 1 },
    { name: 'options[2]', maxCount: 1 },
    { name: 'options[3]', maxCount: 1 }
])], questionController.editQuestion);
// router.put("/:questionId", [auth, admin], questionController.editQuestion);
router.delete("/:questionId", [auth, admin], questionController.deleteQuestion);

module.exports = router;