 
const express = require("express");
const meals_router = express.Router();
const meals = require( "../data/meals.json");
const reservations = require( "../data/reservations.json");
const reviews = require( "../data/reviews.json");
// import data here

meals_router.get("/:id", async (request,response) => {
    console.log(request.params);
    const meals_id = meals.filter(title => title.id === parseInt(request.params.id));
    response.send( meals_id);});

meals_router.get("/", (request,response) => {
    console.log(request.query);
    response.send( meals);});

 meals_router.get("/:id", async (request,response) => {
        console.log(request.params);
        const reservation_id = reservations.filter(name => name.id === parseInt(request.params.id));
        response.send( reservation_id);});

meals_router.get("/", (request,response) => {
        console.log(request.query);
        response.send( reservations);});        

meals_router.get("/:id", async (request,response) => {
        console.log(request.params);
        const review_id = reviews.filter(content => content.id === parseInt(request.params.id));
        response.send( review_id);});
    
meals_router.get("/", (request,response) => {
        console.log(request.query);
        response.send( reviews);});  



        
        


    module.exports = meals_router;