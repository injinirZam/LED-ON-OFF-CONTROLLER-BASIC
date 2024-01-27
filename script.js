document.getElementById('onButton').addEventListener('click', function() {
    // Send a request to the local Node.js server to turn the LED on
    fetch('http://localhost:3000/on');
});

document.getElementById('offButton').addEventListener('click', function() {
    // Send a request to the local Node.js server to turn the LED off
    fetch('http://localhost:3000/off');
});



/* document.getElementById('onButton').addEventListener('click', function() {
    // Send a request to Arduino to turn the LED on
    fetch('http://192.168.1.95/on');
});

document.getElementById('offButton').addEventListener('click', function() {
    // Send a request to Arduino to turn the LED off
    fetch('http://192.168.1.95/off');
}); */
