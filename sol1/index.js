// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const http = require('http');

// create Server

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.write("Welcome to my application \n");
    if(req.url == '/cart'){
        // res.end("No Items in the cart"); 
        return res.end("No Items in the cart"); //if you want to use more res after this the res use return 
    }
    if(req.url == '/user'){
        res.end("You are most Welcome!");
    }
    // here comes the request
    res.end('Response received at port 8080.')
})

server.listen(8080, ()=>{
    console.log("Listening on Port: 8080");
})

module.exports = server;
