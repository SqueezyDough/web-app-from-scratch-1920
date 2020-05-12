import { FetchData } from './api.js';
import * as render from './render.js'
import * as store from './store.js'
import * as utils from './utils.js'
import * as overviewTemplate from './templates/collection.js'
import * as detailsTemplate from './templates/details.js'
import dataHelper from './dataHelper.js'

// import { loader } from './loader.js';

function handleRoutes() {
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';
    const localStorageData = JSON.parse(store.getLocalStorageItems())

    console.log(localStorageData !== null)

    routie({
        '': () => {
            if (localStorageData !== null) {
                console.log('home')

                render.renderTemplate(overviewTemplate.layout, localStorageData)
            } else {
                FetchData(url)
                    .then(data => dataHelper.cleanData(data))
                    .then(data => store.storeData(data))
                    .then(data => render.renderTemplate(overviewTemplate.layout, data))
            }   
        },
        ':id': (id) => {
            const classes = utils.getAllClassesFromCollection(localStorageData)
            const cards = utils.getCardsFromCollection(classes)
            const requestedCard = utils.getCardById(cards, id)

            console.log(requestedCard)

            render.renderTemplate(detailsTemplate.layout, requestedCard, id)
        }
    });
}

export { handleRoutes };
