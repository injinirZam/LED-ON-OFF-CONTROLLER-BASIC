document.getElementById('onButton').addEventListener('click', function() {
    // Send a request to Arduino to turn the LED on
    fetch('http://192.168.1.95/on');
});

document.getElementById('offButton').addEventListener('click', function() {
    // Send a request to Arduino to turn the LED off
    fetch('http://192.168.1.95/off');
});
