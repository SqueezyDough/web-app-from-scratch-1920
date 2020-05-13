// source: https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

// TODO: create dynamic headers
async function FetchData() {
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';

    return fetch(url, {
        headers: {
            'x-rapidapi-host' : 'omgvamp-hearthstone-v1.p.rapidapi.com',
            'x-rapidapi-key' : '7df4822919mshbffd471d5b9df6fp1a2b0bjsndd91db79cbcd',
            "useQueryString": true,
        }
    })
    .then(checkStatus)
    .then(res => res.json())
    .catch(err => {
        console.log(err)
    })
}

export { FetchData };