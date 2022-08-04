const express = require("express");
const dotenv = require("dotenv");
const connectDB = require( "./config/db.js");

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {

    res.send(`request is sent on the ${PORT}`);
});

app.post("/item", (req, res) => {

    res.send(`post request is sending on port ${PORT} `);
});

app.put("/newItem", (req, res) => {

    res.send(`post request is sending on port ${PORT} `);
});

app.delete("/newItem", (req, res) => {

    res.send(`post request is sending on port ${PORT} `);
});


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));