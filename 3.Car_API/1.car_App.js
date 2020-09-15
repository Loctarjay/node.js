
const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

let cars = [
    { id: 1, name: "Ford" },
    { id: 2, model: "Mitzubishi" }
];

app.get("/cars", (req, res) => {
    return res.send(cars);
});

app.get("/cars/id", (req, res) => {
    return res.send(cars[id]);
});

app.post("/cars", (req, res) => {
    return res.send();
});