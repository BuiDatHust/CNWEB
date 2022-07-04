const {Router} = require('express');
const AuthController = require('../controllers/auth.controller');
const { authValidation } = require('../helpers/validation');
const authenticateUser = require('../middlewares/authenticate');
const authorizePermission = require('../middlewares/authorize');
const router = Router();

router.post('/register',authValidation, AuthController.register);
router.post('/login',authValidation, AuthController.login);
router.post('/logout', AuthController.logout);
router.get('/testauthen', authenticateUser, (req, res) => { console.log("authentiated")});
router.get('/testauthor', authorizePermission('admin'), (req, res) => { console.log("admin route")});

module.exports = router;