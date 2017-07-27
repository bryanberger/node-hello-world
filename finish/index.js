// Include the necessary packages
const http = require('http')
const fs = require('fs')

// Define the port to use for the server
let port = process.env.PORT || 3000;

// Create a simple httpServer to respond with the index.html
// for every request, for all routes
http.createServer((request, response) => {

  // Read the file from the harddrive
  fs.readFile('index.html', (err, data) => {
    // Write a successful (200) response packet with a content type of HTML
    response.writeHead(200, {'Content-Type': 'text/html'})

    // Write in the index.html file we have in this folder
    response.write(data)

    // Denote the end of the reponse
    response.end()

  })

}).listen(port)

// Log that we are listening
console.log('Listening on port: %d', port)
