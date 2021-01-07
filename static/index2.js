// console.log("HEllo World");
// //Here we creates a server
// const http = require('http');

// let hostname = '127.0.0.1';
// let port = 3000;

// let server = http.createServer((req, res) => {
//     // res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
// const fs = require("fs");//this is how we import modules
// let text = fs.readFileSync("temp.txt", "utf-8")//reading file
// let write_txt = fs.writeFileSync("temp_no.txt", `${text`)
// console.log(`${ text }`)
//-------------------------------------------------
//serving HTML files using node.js
const http = require('http');
const fs = require('fs');
const port = 8000;
const locathost = '127.0.0.1';

const file_content = fs.readFileSync('index.html');
const css_file = fs.readFileSync('index.css', 'utf-8')
const server = http.createServer((req, res) => {
    let url = req.url;
    console.log(url);
    res.statusCode = 200;
    res.setHeader('content-type', 'text/HTML');
    if (url == '/') {
        res.end(`<script>${css_file}</script>` + file_content)
    }
    else if (url == '/about') {
        res.end('this is about page');
    }
    else {
        res.end(`<script>${css_file}</script>` + file_content)
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log("http://127.0.0.1:8000/");
})