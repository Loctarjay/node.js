// const express = require("express");

// require object.json and console log
//const object = require("../1._Intro/object.json");





const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());


app.get("/", (req, res) => {
    return res.send();
});

app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("Server is running on port: ", port);
});

app.get("/me", (req, res) => {
    return res.send({"firstName": "Jannick", "lastName": "Lund-Pedersen"});
});

app.get("/time", (req, res) => {
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return res.send({ time });
});


// Implement month
const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "September"
};
app.get("/month", (req, res) => {
    const monthNumber = new Date().getMonth();
    return res.send({ month: months[monthNumber] });
});

// Implement day
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get("/day", (req, res) => {
    const dayNumber = new Date().getDay();
    return res.send({ day: days[dayNumber]});
});

// Implement Query String
app.get("/querystring", (req, res) => {
    return res.send({ query: req.query });
});

// Create a request handler on message that takes a path variable
// from the client and returns it directly to the client in the response

app.get("/message/:message", (req, res) => {
    return res.send({
        message: req.params.message
    });
});


app.post("/showmethebody", (req, res) => {
    return res.send( req.body );
});