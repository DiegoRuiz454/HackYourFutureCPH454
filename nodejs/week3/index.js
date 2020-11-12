const express = require("express");
const app = express();
const calculator_router = require("./calculatorRouter.js")

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.use('/calculator',calculator_router);



app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

module.exports = app;