const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('Hello World')
})

router.get('/:id',(req,res) => {
    res.send('Get Call')
})

router.post('/:id',(req,res) => {

})

router.patch('/:id',(req,res) => {

})
router.delete('/:id',(req,res) => {

})
module.exports = router