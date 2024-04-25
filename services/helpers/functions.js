const UserSchema = require('../models/User/UserModel');

const validateUser = (req) => {
    if (UserSchema.findOne({email: req.body.email}) != null) {
        //throw error a user with req.body.email already exists
        return false
    } else if (UserSchema.findOne({username : req.body.username}) != null) {
        // throw error this username already exists
        return false
    }
    return true
}