// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if (req.method == 'POST') {
    // expecting data from client
    let body = '';

    // Handle data chunks from the client
    req.on('data', chunk => {
      body += chunk.toString()
    })

    // Handle the end of the request
    req.on('end', () => {
      try {
        // append the body to data.txt file
        fs.appendFileSync('data.txt', body);

        // Read and log the content of the file
        const buffer = fs.readFileSync('data.txt', { encoding: 'utf8' })
        console.log(buffer);
        res.end('Data received and processed successfully');
      }
      catch (error) {
        // Handle JSON parsing or other errors
        console.error('Error processing data:', error.message);

        // Send an error response to the client
        // res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Error processing data');
      }
    })
  }
  else {
    res.end("data received");
  }

});

export default server;
