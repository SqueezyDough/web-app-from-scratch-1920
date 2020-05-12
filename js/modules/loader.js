export function start() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('is-hidden')
}

export function stop() {
    const loader = document.querySelector('.loader');
    loader.classList.add('is-hidden')
}