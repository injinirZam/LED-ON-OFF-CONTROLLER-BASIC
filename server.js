const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

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
    console.log(`Server is running on port ${port}`);
});
