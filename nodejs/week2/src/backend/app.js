const express = require("express");
const app = express();
const meal_router = require("./data/meals_router.js")
const meal_parameter = require("./data/meals_parameters.js")


app.use('/meals',meal_router);
app.use('/reservations',meal_router);
app.use('/reviews',meal_router);
app.use('/meals',meal_parameter);









module.exports = app;
