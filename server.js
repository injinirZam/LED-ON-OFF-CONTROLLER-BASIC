const express = require('express');
const app = express();
const port = 3000; // Choose any available port

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/on', (req, res) => {
    // Send a request to Arduino to turn the LED on
    // You can handle the response from Arduino if needed
    res.send('Turning LED on...');
});

app.get('/off', (req, res) => {
    // Send a request to Arduino to turn the LED off
    // You can handle the response from Arduino if needed
    res.send('Turning LED off...');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
