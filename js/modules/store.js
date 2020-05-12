
export function storeData(data) {
    const collection = getLocalStorageItems() ? getLocalStorageItems() : setLocalStorage(data)
    return JSON.parse(collection)
}

export function getLocalStorageItems() {
    return localStorage.getItem('collection')
}

function setLocalStorage(data) {
    return localStorage.setItem('collection', JSON.stringify(data))
}