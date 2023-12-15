// popup.js
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the button with the id "myButton"
    let myButton = document.getElementById('generateBtn');

    if (myButton) {
        myButton.addEventListener('click', function () {
            console.log('Button clicked!');
            // Your code here...
        });
    } else {
        console.error('Button not found.');
    }

    let myButton2 = document.getElementById('currentTabBtn');

    if (myButton2) {
        myButton2.addEventListener('click', function () {
            console.log('Button2 clicked!');
            // Your code here...
        });
    } else {
        console.error('Button2 not found.');
    }
});
