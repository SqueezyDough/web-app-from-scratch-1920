import { FetchData } from './api.js';
// import { loader } from './loader.js';

function handleRoutes() {
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';

    routie({
        '/':
            FetchData(url),
        ':name': (cardName) => {
            FetchData(url, cardName)
        }
    });
}

export { handleRoutes };
