const authorizePermission = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new Error('Unauthrize to access');
        }
        next();
    };
};

module.exports = authorizePermission;