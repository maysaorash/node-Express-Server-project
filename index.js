const express = require("express")

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});


app.get("/about", (req, res) => { 
    res.json("I am a student");}); 
app.get("/hobbies", (req, res) => { 
    res.json("My hobbies cooking, cleaning, coding");}); 
app.get("/friends", (req, res) => { 
    res.json(["Zerrin","Lisa","Mahri","Gul","Done"]);}); 

    app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))