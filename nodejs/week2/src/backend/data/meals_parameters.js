

const express = require("express");
const meals_router = express.Router();
const meals = require( "../data/meals_1.json");


// params

meals_router.get('/:name', async(request,response) => {
    console.log(request.params);
    const Price = meals.filter(meals => meals.price <= 90);
    if (request.query.maxPrice === `90`)
    response.send( module.exports = Price);})

meals_router.get("/:title", async (request,response) => {
console.log(request.params);
const title = meals.filter(title => title.id === parseInt(request.params.id));
if (request.params.title === "Rød grød med fløde"){ 
response.send( title)};});



module.exports = meals_router;