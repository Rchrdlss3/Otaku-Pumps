require('dotenv').config();
const express = require('express')
const app = express()
const UserSchema = require('./models/User/UserModel')
const mongoose = require('mongoose');
const db = mongoose.connection

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("successfully connected")
  } catch(e) {
    console.log(e)
  }
}

app.listen(3000)
app.use(express.json())
app.get('/users',(req,res)=> {
  res.status(200).send(JSON.stringify(User))

})

app.get('/',(req,res) => {
    res.status(200).send(JSON.stringify("hell from home"));
})
app.delete('/delete', async (req,res) => {
  let selectedId=req.query.id;
  const result = await UserSchema.findByIdAndDelete(selectedId)
  res.send(result)
})
app.post('/post', async(req,res) => {
  let data = new UserSchema(req.body); 
  const result = await data.save();
  res.send(result);
})
app.put('/update',(req,res) => {
  let selectedId = req.query.id;
  selectedUser = UserSchema.findById(selectedId).updateOne( )
  selectedUser
})

connect();