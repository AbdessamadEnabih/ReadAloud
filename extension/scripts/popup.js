import { generateAudio } from '../utils/utils.js'

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('currentTabBtn').addEventListener('click', async function () {
        await generateAudio()
    });

    document.getElementById('generateBtn').addEventListener('click', async function () {
        let inputValue = document.getElementById('URLInput').value
        if (inputValue){
            let res = await generateAudio(true, inputValue)

            if(res) {
                document.getElementById("urlpage").style.display = "none"
                
                document.getElementById("audio_player").style.display = "block"
                let audioElement = document.getElementById("player")
                Article = localStorage.getItem('Article')
                audioElement.setAttribute('src', "data:audio/mpeg;base64,"+Article.url);
                audioElement.load();
            }
        }   
        else
            displayError('Please provide the URL', 'url-input-error-container')
    });

});

const displayError = (errorMessage, elementID = 'default-error-container') => {
    let targetElement = document.getElementById(elementID)
    targetElement.textContent = errorMessage
}

window.displayError = displayError
