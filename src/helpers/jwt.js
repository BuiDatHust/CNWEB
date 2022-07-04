const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET
const tokenLifeTime = process.env.EXPIRE_TIME

const generateAccessToken = ( {payload} ) => {
    const token = jwt.sign({payload}, secret, {
        expiresIn: tokenLifeTime,
    });

    return token;
};

const isToken = async ( token ) => {
    const decoded = await jwt.verify(token, secret);
    return decoded.payload
}

const attachTokenToRes = ( res, user) => {
    const token = generateAccessToken({payload:user});

    res.cookie('accessToken', token, {
        httpOnly: true,
        expires: new Date(Date.now()+ 3600000) ,
        // secure: true , 
        signed: true,
    });
};

module.exports = {
    generateAccessToken,
    isToken,
    attachTokenToRes,
};