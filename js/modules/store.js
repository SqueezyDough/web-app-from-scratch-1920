
import { FetchData } from './api.js';
import dataHelper from './dataHelper.js'

export async function storeData(data) {
    getLocalStorageItems() ? await getLocalStorageItems() : setLocalStorage(data)
    return getLocalStorageItems()
}

export function getLocalStorageItems() {
    const storage = JSON.parse(localStorage.getItem('collection'))

    // if LS is empty fetch data from api
    return storage ? storage : fetchFromAPi()
}

function setLocalStorage(data) {
    localStorage.setItem('collection', JSON.stringify(data))
    return getLocalStorageItems()
}

function fetchFromAPi(url) {
    return FetchData(url)
        .then(data => dataHelper.cleanData(data))
        .then(data => setLocalStorage(data))
} 