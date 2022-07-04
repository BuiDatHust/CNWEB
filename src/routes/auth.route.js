const {Router} = require('express');
const AuthController = require('../controllers/auth.controller');
const { authValidation } = require('../helpers/validation');
const router = Router();

router.post('/register',authValidation, AuthController.register);
router.post('/login',authValidation, AuthController.login);
router.post('/logout', AuthController.logout);

module.exports = router;