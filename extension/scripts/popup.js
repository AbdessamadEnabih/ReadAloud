import { generateAudio } from '../utils/utils.js'

const getResponse = (result) => {
    console.log(result);
}

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('currentTabBtn').addEventListener('click', function () {
        getResponse(generateAudio())
    });

    document.getElementById('generateBtn').addEventListener('click', function () {
        let inputValue = document.getElementById('URLInput').value
        if (inputValue)
            getResponse(generateAudio(true, inputValue))
        else
            displayError('Please provide the URL', 'url-input-error-container')
    });

});

const displayError = (errorMessage, elementID = 'default-error-container') => {
    let targetElement = document.getElementById(elementID)
    targetElement.textContent = errorMessage
}
