
// explain express comes from node_modules that comes from writing npm install express -s


const moviesRouter = require("./movies-router");
const express = require("express");
const app = express();

const warmup = require("./warmup_week2.js")

// app.use binds middleware to your application. You can give app.use a path and router. 
app.use('/numbers',warmup);

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});





