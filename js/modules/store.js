
export function storeData(data) {
    getLocalStorageItems() ? getLocalStorageItems() : setLocalStorage(data)
    return JSON.parse(getLocalStorageItems())
}

export function getLocalStorageItems() {
    return localStorage.getItem('collection')
}

function setLocalStorage(data) {
    return localStorage.setItem('collection', JSON.stringify(data))
}