const UserSchema = require('../models/User/UserModel')

export async function createNewUser(user) {
    let data = new UserSchema(req.body); 
    const result = await data.save();
    res.send(result); 
}
