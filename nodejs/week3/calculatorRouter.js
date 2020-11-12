
const express = require("express");
const calculatorRouter = express.Router();

// /calculator/addition?firstParam=1&secondParam=2 should respond with 3.

calculatorRouter.get('/addition', (request,response) => {

  console.log(request.query);
  if (request.query.firstParam === {num1}, request.query.secondParam === {num2} ) { 

  // New app using express module 
  const num1 = parseInt(request.params.num1);
  const num2 = parseInt(request.params.num2);
  
  var result =  num1 + num2;
  
  response.send(result); 
};});

// /calculator/subtration?firstParam=4&secondParam=2 should respond with 2.

calculatorRouter.get('/subtration', (request,response) => {
  console.log(request.query);
  if (request.query.firstParam === {num1}, request.query.secondParam === {num2} ) { 

  // New app using express module 

  const num1 = parseInt(request.params.num1);
  const num2 = parseInt(request.params.num2);
  
  var result =  num1 - num2;
  
  response.send(result); 
};});

// /calculator/multiply?firstParam=4&secondParam=2 should respond with 8.

calculatorRouter.get('/multiply', (request,response) => {
  console.log(request.query);
  if (request.query.firstParam === {num1}, request.query.secondParam === {num2} ) { 


  // New app using express module 
  
  const num1 = parseInt(request.params.num1);
  const num2 = parseInt(request.params.num2);
  
  var result =  num1 * num2;
  
  response.send(result); 
};});

// /calculator/multiply?firstParam=8&secondParam=2 should respond with 4.

calculatorRouter.get('/Division', (request,response) => {
    console.log(request.query);

    if (request.query.firstParam === {num1}, request.query.secondParam === {num2} ) { 

    // New app using express module 
    const num1 = parseInt(request.params.num1);
    const num2 = parseInt(request.params.num2);
    
    var result =  num1 / num2;
    
    response.send(result); 
  };});

    module.exports = calculatorRouter;