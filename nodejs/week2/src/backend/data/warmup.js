
const express = require("express");
const warmup_week2 = express.Router();

warmup_week2.get('/add', (request,response) => {
    console.log(request.query);
    if (request.query.first === `3`, request.query.second === `7` ) { 
    response.send( first + second)};});

    module.exports = warmup_week2;