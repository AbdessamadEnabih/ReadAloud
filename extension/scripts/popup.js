import { generateAudio } from '../utils/utils.js'

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('currentTabBtn').addEventListener('click', async function () {
        await generateAudio()
    });

    document.getElementById('generateBtn').addEventListener('click', async function () {
        let inputValue = document.getElementById('URLInput').value
        if (inputValue)
            await generateAudio(true, inputValue)
        else
            displayError('Please provide the URL', 'url-input-error-container')
    });

});

const displayError = (errorMessage, elementID = 'default-error-container') => {
    let targetElement = document.getElementById(elementID)
    targetElement.textContent = errorMessage
}

window.displayError = displayError
