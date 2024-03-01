 const mongoose = require("mongoose");
 const Schema = mongoose.Schema

 const UserSchema = Schema({
     userId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
     },
     email: {
         type: String,
         required: true,
     },
     userName : {
        type: String,
        required: true
     },
     password: {
        type: String,
        required: true
     },
     firstName: {
        type: String,
        required: true
     },
     lastName: {
        type: String,
        required: true
     },
     favoriteAnimes: {
         type: [String],
         required: false
     }
 })

 const GymSchema = Schema ({
     gymId: {
         type: mongoose.Schema.Types.ObjectId,
         index: true,
         required: true,
         auto: true
     },
     name: {
         type: String,
         required: true
     },
     location: {
         type: String,
         required: false
     }
})


module.exports = mongoose.model('UserSchema',UserSchema)












