const express = require('express');
const cors = require('cors');
const router = express.Router();
var parser = require('ua-parser-js');

app.use(cors());

router.get('/get-device', (req,res) => {
    var userAgent = parser(req.headers['user-agent'])
    res.end(JSON.stringify(userAgent,null,'  '));
})