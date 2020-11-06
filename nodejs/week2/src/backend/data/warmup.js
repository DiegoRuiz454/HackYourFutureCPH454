
const express = require("express");
const warmup_week2 = express.Router();

warmup_week2.get('/add', (request,response) => {
    console.log(request.query);
    const first = request.query.first;
    const second = request.query.second;
    if (first === `3`, second === `7` ) { 
    var x = first + second;
    var y = 0;
    x.split('').forEach(x => y += parseInt(x));
    response.send( x)};});

    module.exports = warmup_week2;