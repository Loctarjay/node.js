// const express = require("express");

// require object.json and console log
//const object = require("../1._Intro/object.json");





const app = require("express")();
const port = 8080;



app.get("/", (req, res) => {
    return res.send();
});

app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("Server is running on port: ", port);
});