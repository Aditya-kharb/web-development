const express = require("express");
const BodyParser = require("body-parser");
const port = 80;
const pug = require('pug')
const app = express();
const fs = require('fs');
const path = require('path')
app.use(express.static(__dirname + '/static'));
app.use(BodyParser.urlencoded({ extended: true }));
app.set('/views', path.join(__dirname + '/views'));
app.set('view engine', 'pug')
//this is for serving static files
const HTML_main_page = fs.readFileSync('static/index.html', "utf-8");
const css_main_file = fs.readFileSync('static/index.css', "utf-8");

app.get('/about', (req, res) => {
    // res.send("about us page");
    res.status(200).render('demo', { title: "this is title", message: "this is heading" });
})
app.get('/', (req, res) => {
    res.send(`<style>${css_main_file}</style>` + HTML_main_page, name = "name");
});
app.post('/', (req, res) => {
    res.send(`<style>${css_main_file}</style>` + HTML_main_page);
    let name = req.body.email;
    let number = req.body.number;
    let cars = req.body.cars;
    console.log(name + " " + number + " " + cars);
});
app.listen(port, () => {
    console.log(`our applicatipn is running on port: ${port}`)
});