const { isToken } = require("../helpers/jwt");

const authenticateUser = async (req, res, next) => {
    try {
        const token = req.signedCookies.accessToken;
        if (!token) {
            throw new Error('Authenticate Fail');
        }
        const user = await isToken( token );
        req.user = createToken(user);
        next();
    } catch (error) {
        throw new Error('Authenticate Fail');
    }
};


module.exports = authenticateUser;