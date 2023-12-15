const getAudio = () => ('test')
const getArticle = () => {

}
export async function generateAudio(currentTab = false) {
    console.log('test click');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // tabs[0] contains information about the active tab
        if (tabs[0]) {
            console.log(tabs[0].url);
            return tabs[0].url;
        }
    });
}

