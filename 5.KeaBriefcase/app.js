const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/upload/upload.html");
});

app.post("/form", (req, res) => {
    console.log(req.body);
    return res.send({ data: req.body });
});

app.get("/about", (req, res) => {
    console.log("about test");
    return res.sendFile(__dirname + "/public/about/about.html");
});



const port = process.env.PORT || 8080;
app.listen(port, (error) => {
    if ( error ) {
        console.log("Server couldn't start", error);
    }
    console.log("Server started on port", Number(port));
});