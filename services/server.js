require('dotenv').config();
const express = require('express')
const app = express()
const UserSchema = require('./models/User/UserModel')
const mongoose = require('mongoose');
const db = mongoose.connection
const internalError = require('./helpers/commonHelper');

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("successfully connected")
  } catch(e) {
    res.status(500).send(internalError(e))
  }
}

app.listen(3000)
app.use(express.json())
app.get('/users',(req,res)=> {
  try {
      res.status(200).send(JSON.stringify(User))
  } catch (e) {
    res.status(500).send(internalError(e))
  }
})

app.get('/',(req,res) => {
  try {
    res.status(200).send(JSON.stringify("hell from home"));
  } catch (e) {
    res.status(500).send(internalError(e))
  }

})
app.delete('/delete', async (req,res) => {
  try {
  let selectedId=req.query.id;
  const result = await UserSchema.findByIdAndDelete(selectedId)
  res.send(result)
  } catch (e) {
    res.status(500).send(internalError(e))
  }

})
app.post('/post', async(req,res) => {
  try {
  let data = new UserSchema(req.body); 
  const result = await data.save();
  res.send(result);
  } catch (e) {
    res.status(500).send(internalError(e))
  }
})
app.put('/update',(req,res) => {
  try {
  let selectedId = req.query.id;
  selectedUser = UserSchema.findById(selectedId).updateOne( )
  selectedUser
  } catch (e) {
    res.status(500).send(internalError(e))
  }

})

connect();