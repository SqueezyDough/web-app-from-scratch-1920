import { FetchData } from './api.js';
import * as loader from './loader.js';
import * as render from './render.js'
import * as store from './store.js'
import * as utils from './utils.js'
import * as overviewTemplate from './templates/collection.js'
import * as detailsTemplate from './templates/details.js'

function handleRoutes() {
   
    
    routie({
        '': async () => {
            loader.start()
            const localStorageData = await store.getLocalStorageItems()

            console.log(localStorageData)

            if (localStorageData !== null) {          
                render.renderTemplate(overviewTemplate.layout, localStorageData)
            } else {               
                const data = await fetchFromAPi(url)
                render.renderTemplate(overviewTemplate.layout, data)  
            }   
            loader.stop()
        },
        ':id': async (id) => {
            loader.start()
            const data = await store.getLocalStorageItems()
            loader.stop()  
             
            // get requested card
            const classes = utils.getAllClassesFromCollection(data)
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
