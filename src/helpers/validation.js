const {check} = require('express-validator');

const authValidation = [
    check('phone')
      .exists()
      .withMessage("phone is empty")
      .isMobilePhone()
      .withMessage("not a valid phone number"),
    check('password')
      .exists()
      .withMessage("PASSWORD IS EMPTY")
      .isLength({ min: 8 })
      .withMessage("PASSWORD LENGTH MUST BE MORE THAN 8"),
];

module.exports = {
    authValidation
}