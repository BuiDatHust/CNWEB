const { isToken } = require("../helpers/jwt");
const createToken  = require('../helpers/createToken')

const authenticateUser = async (req, res, next) => {
    try {
        const token = req.signedCookies.accessToken;
        console.log(token);
        if (!token) {
            throw new Error('Authenticate Fail');
        }
        const user = await isToken( token );
        req.user = createToken(user);
        next();
    } catch (error) {
        console.log(error);
        throw new Error('Authenticate Fail');
    }
};


module.exports = authenticateUser;