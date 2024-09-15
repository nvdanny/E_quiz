const express = require("express")
const router = express.Router();
const userController = require('../controllers/userController');
const { auth, admin } = require("../middlewares/auth");

router.get('/list', [auth, admin], userController.getAllUser);
router.get('/:id', [auth], userController.getOneUser);
router.put('/edit/:id', [auth], userController.editUser);
router.delete('/delete/:id', [auth, admin], userController.deleteUser);

module.exports = router;