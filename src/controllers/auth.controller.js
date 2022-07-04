const User = require("../models/users.model");
const jwt = require('jsonwebtoken');
const { attachTokenToRes } = require("../helpers/jwt");
const {validationResult} = require('express-validator');

class AuthController {
    register = async (req,res) => {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(422).json({ errors: errors.array() });
            }

            const {name,password,phone} = req.body;
            const user = await User.findOne({phone});
            if(user){
                return res.status(500).send({message: "Phone Exist"})
            }
            let newuser
            if(User.countDocuments({})==0) {
                newuser = await User.create({name,password,phone,role: 'admin'})
            }
            newuser = await User.create({name,password,phone})
            res.status(200).send({newuser})
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }

    login = async (req, res) => {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(422).json({ errors: errors.array() });
            }

            const {password,phone} = req.body;
            const user = await User.findOne({phone});
            if(!user){
                return res.status(404).send({error: "phone not correct"});
            }
            const isPasswordCorrect = user.comparePassword(password);
            if(!isPasswordCorrect){
                return res.status(404).send({error: "password not correct"});
            }
            attachTokenToRes(res,user);
            res.status(200).send({message: "Login successful"})
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }

    logout(req,res) {
        res.clearCookie('accessToken')
        res.status(200).send({message: "Logout Success"}) 
    }
}

module.exports = new AuthController();