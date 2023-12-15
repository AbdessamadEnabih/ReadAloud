const getAudio = () => ('test')
const getArticle = () => {

}
export async function generateAudio(urlGiven = false, url) {
    if (!urlGiven) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            console.log(tabs[0] ? tabs[0].url : 'Not found');
        });
    } else {
        console.log(url);
    }

}

