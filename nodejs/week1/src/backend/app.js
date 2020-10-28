const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals.json");
const reservations = require("./data/reservations.json");
const reviews = require("./data/reviews.json");
const warmup = require("./data/warmup.js");

//-----the result of the of the circle measurements in the server----------------

console.log(warmup); 

//----------Meals sharing Web ---------------------------

app.get("/", async (request, response) => {
    response.send("Meals Sharing Web App");
}); 


//----------------Respond with the json for all the meals.---------------------

app.get("/meals", async (request, response) => {
    
    response.send(module.exports = {meals,reviews});
}); 

//-----------Respond with the json for all the meals that are cheap ---------------------

app.get("/cheap-meals", async (request, response) => {
    
    const cheap = meals.filter(meals => meals.price <= 50);
    response.send(module.exports = cheap);
}); 

//------------Respond with the json for all the meals (including it's reviews) that can fit lots of people----------

app.get("/large-meals", async (request, response) => {

    const large = meals.filter(meals => meals.NumberOfGuests == 12);

    response.send(module.exports = large); // this meal does not have review
});

//--------------Respond with the json for a random meal (including it's reviews)----------------------------------


app.get("/meal", async (request, response) => {

    const values = Object.values(meals)

    const randomValue = values[parseInt(Math.random() * values.length)]
    
    response.send(module.exports = randomValue);
});

//-----------------Respond with the json for all reservations------------------------------

app.get("/reservations", async (request, response) => {
    
    response.send(module.exports = reservations);
}); 

//---------------------Respond with the json for a random reservation-------------------

app.get("/reservation**", async (request, response) => {

    const values = Object.values(reservations)

    const randomValue = values[parseInt(Math.random() * reservations.length)]
    
    response.send(module.exports = randomValue);
});

//----------------warmp.---------------------

//app.get("/warmup", async (request, response) => {
    
   // response.send(module.exports = warmup);
//}); 


module.exports = app;
