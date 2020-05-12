import { FetchData } from './api.js';
import * as loader from './loader.js';
import * as render from './render.js'
import * as store from './store.js'
import * as utils from './utils.js'
import * as overviewTemplate from './templates/collection.js'
import * as detailsTemplate from './templates/details.js'
import dataHelper from './dataHelper.js'

function handleRoutes() {
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';
    
    routie({
        '': () => {
            const localStorageData = JSON.parse(store.getLocalStorageItems())

            if (localStorageData !== null) {          
                render.renderTemplate(overviewTemplate.layout, localStorageData)
            } else {
                loader.start()
                
                FetchData(url)
                    .then(data => dataHelper.cleanData(data))
                    .then(data => store.storeData(data))
                    .then(data => render.renderTemplate(overviewTemplate.layout, data))
                    .then(() => loader.stop())
            }   
        },
        ':id': (id) => {
            const localStorageData = JSON.parse(store.getLocalStorageItems())
            const classes = utils.getAllClassesFromCollection(localStorageData)
            const cards = utils.getCardsFromCollection(classes)
            const requestedCard = utils.getCardById(cards, id)

            // example so I can show off a map function
            const usingZeroCostCardsIsCheating = utils.doSomethingPrettyWithMap(cards)
            console.log('crappified 0-cost cards', usingZeroCostCardsIsCheating)

            render.renderTemplate(detailsTemplate.layout, requestedCard, id)
        }
    });
}

export { handleRoutes };
