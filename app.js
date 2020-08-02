//code from quote api
const express = require('express');
var cors = require('cors');
const app = express();
const quotes = require("./quotes.json");

app.use(cors());

app.get("/quotes", (req, res) => {
    res.send({
        quotes
    })
})


app.listen(8080, () => {
    console.log("server started")
})