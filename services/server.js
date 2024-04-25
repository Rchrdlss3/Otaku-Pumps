require('dotenv').config();
const express = require('express')
const cors = require('cors')
var parser = require('ua-parser-js');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const internalError = require('./helpers/commonHelper');
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/users');

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
app.use(cors())
app.use(cookieParser());
app.use('/user',userRoute)

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


app.put('/update',(req,res) => {
  try {
  let selectedId = req.query.id;
  selectedUser = UserSchema.findById(selectedId).updateOne( )
  selectedUser
  } catch (e) {
    res.status(500).send(internalError(e))
  }
})

app.get('/get-device',(req,res) => {
  try {
    var userAgent = parser(req.headers['user-agent'])
    res.end(JSON.stringify(userAgent,null,'  '));
  } catch (e) {
    res.status(500).send(internalError(e))
  }
})

connect();