const express = require('express');
const router = express.Router();
const { createExam, getCurrentExam, submitExam } = require('../controllers/examController');

router.post('/create', createExam);
router.get('/current', getCurrentExam);
router.post('/submit', submitExam);

module.exports = router;
