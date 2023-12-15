import { generateAudio } from '../utils/utils.js'

const getResponse = (result) => {

}


document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('currentTabBtn').addEventListener('click', function () {
        getResponse(generateAudio())
    });

    document.getElementById('generateBtn').addEventListener('click', function () {
        getResponse(generateAudio(true, document.getElementById('URLInput').value))
    });

});
