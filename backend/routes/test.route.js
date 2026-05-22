var express = require('express');
const { createTest, getTests } = require('../controllers/test.controller');
var router = express.Router();
const upload = require('../middleware/upload');

router.post('/create', upload.single('image'), createTest);
router.get('/all', getTests);

module.exports = router;