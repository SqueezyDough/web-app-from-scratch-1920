import { renderTemplate } from './render.js'
import dataHelper from './dataHelper.js'

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
async function FetchData(url, cardName) {
    return fetch(url, {
        headers: {
            'x-rapidapi-host' : 'omgvamp-hearthstone-v1.p.rapidapi.com',
            'x-rapidapi-key' : '7df4822919mshbffd471d5b9df6fp1a2b0bjsndd91db79cbcd'
        }
    })
    .then(checkStatus)
    .then(res => res.json())
    .then(data => dataHelper.cleanData(data))
    .then(data => renderTemplate(data))
}

export { FetchData };

// fetch, clean, store, render, catch err
// check if collection is in store
