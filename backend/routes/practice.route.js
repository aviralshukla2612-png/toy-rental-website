var express = require('express');
const { createPractice, getPractice } = require('../controllers/practice.controller');
var router = express.Router();
const upload = require('../middleware/uploads');

router.post('/create', upload.single('image'), createPractice);
router.get('/all', getPractice);

module.exports = router;