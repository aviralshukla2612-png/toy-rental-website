var express = require('express');
const { register, login, getUsers, registerAdmin, loginAdmin } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth');
var router = express.Router();

// user routes
router.post('/register', register);
router.post('/login', login);


router.post('/admin/register', registerAdmin);
router.post('/admin/login', loginAdmin);

router.get('/users', authMiddleware('admin') ,getUsers);

module.exports = router;    