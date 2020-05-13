import * as loader from './loader.js';
import * as render from './render.js'
import * as store from './store.js'
import * as utils from './utils.js'
import * as overviewTemplate from './templates/collection.js'
import * as detailsTemplate from './templates/details.js'

function handleRoutes() {  
    routie({
        '': () => {
            loadData()
                .then(data => render.renderTemplate(overviewTemplate.layout, data))  
        },
        ':id': id => {
            loadData()
                .then(data => utils.lookupCard(data, id))
                .then(data => render.renderTemplate(detailsTemplate.layout, data, id))
        }
    });
}

async function loadData() {
    loader.start()
    const data = await store.getLocalStorageItems()
    loader.stop()
    return data
}

export { handleRoutes };
