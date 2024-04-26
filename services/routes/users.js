const express = require('express');
const router = express.Router();
const validateUser = require('../helpers/functions');
const UserSchema = require('../models/User/UserModel');
var jwt = require('jsonwebtoken');

router.post('/register-user', async(req,res) => {
        const user = await UserSchema.findOne({$or : [
            {userName: req.body.userName},
            {email: req.body.email}
        ]})
        if (user) {
            res.status(409).send('User already exists')
        } else {
            try {
            let data = new UserSchema(req.body);
            const result =  data.save();
            res.status(200).send(`User successfully created ${result}`)
            } catch (e) {
                res.status(500).send(internalError(e))
            }
        }
})
router.post('/login',(req,res) => {
        const reqUser = req.body;
        UserSchema.findOne({userName: reqUser.userName}).then(
            (foundUser) => {
                if (foundUser.password == reqUser.password) {
                    const userName = foundUser.userName
                    delete foundUser.password;
                    const token = jwt.sign({userName},process.env.JWT_SECRET,{expiresIn:'1h'});
                    res.cookie("token",token,{
                        httpOnly: true
                    })
                return res.status(200).send(token)
            } else {
                return res.status(400).json({
                    error: failed
                })
            }}
        ).catch((err) => {
            return res.status(400).send(`${err}`)
        }) 
})

module.exports = router