// script.js

document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greeting = `Hello, ${name}! Welcome to caseclass shoe collection.`;
    document.getElementById('greeting').innerText = greeting;
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('feedbackForm').reset();
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
});
// script.js

