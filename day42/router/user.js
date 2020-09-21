let express = require('express');
let route = express.Router();
let {} = require('../promiseFs');
route.post('/login',(req,res)=>{
    console.log(666);
})

module.exports = {route};