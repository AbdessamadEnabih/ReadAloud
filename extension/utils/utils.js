const getURL = async () => {
    try {
        const tabs = await new Promise((resolve) => {
            chrome.tabs.query({ active: true, currentWindow: true }, resolve);
        });

        if (tabs[0]) {
            return tabs[0].url;
        } else {
            window.displayError('URL not found', 'default-error-container');
            throw new Error('URL not found');
        }
    } catch (error) {
        console.error(error);
    }
}

const retrieveDataFromLocalStorage = (element) => {
    let item = localStorage.getItem(element)
    return JSON.parse(item)
}


async function generateAudio(urlGiven = false, url) {
    let Article = {
        url: null,
        title: null,
        audio: null
    }
    Article.url = urlGiven ? url : await getURL()
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: Article.url })
    }

    fetch('http://localhost:8000/generate_audio', options)
        .then(response => (response.json()))
        .then(data => {
            Article.title = data.title
            Article.audio = data.audio

            localStorage.setItem('Article', JSON.stringify(Article))

            return true
        })
        .catch(error => console.error(error))
    
}

export {
    generateAudio
}
