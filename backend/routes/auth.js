const exppress = require('express');
const { registerUser } = require('../controllers/authControler')
const router = exppress.Router();

router.router('register').post(registerUser);

module.exports = router;