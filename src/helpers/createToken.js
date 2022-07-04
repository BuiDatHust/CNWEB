const createToken = (user) => {
    return {
        name: user.name,
        id: user._id,
        phone: user.phone,
        role: user.role
    }
}

module.exports = createToken;
