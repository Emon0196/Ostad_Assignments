// Import the http and fs modules
const http = require('http');
const fs = require('fs');

// Define the port
const PORT = 5500;

// Create the server
const server = http.createServer((req, res) => {
    // Handle different routes
    if (req.url === '/') {
        // Home Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home Page');
    } else if (req.url === '/about') {
        // About Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page');
    } else if (req.url === '/contact') {
        // Contact Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Contact Page');
    } else if (req.url === '/file-write') {
        // File Write operation
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error writing the file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File demo.txt has been created with "hello world" content.');
            }
        });
    } else {
        // 404 Not Found for any other route
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
