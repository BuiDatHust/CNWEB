const {Router} = require('express');
const router = Router();
const AuthRouter = require('./auth.route')

router.use('/auth', AuthRouter);

module.exports = router;