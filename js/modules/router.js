import { FetchData } from './api.js';
import { renderTemplate } from './render.js'
import * as overviewTemplate from './templates/collection.js'
import * as detailsTemplate from './templates/details.js'
import dataHelper from './dataHelper.js'

// import { loader } from './loader.js';

function handleRoutes() {
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';

    routie({
        '/':
            FetchData(url)
                .then(data => dataHelper.cleanData(data))
                .then(data => renderTemplate(overviewTemplate.layout, data)),

        ':id': (url, id) => {
            FetchData(url, id)
                .then(data => renderTemplate(detailsTemplate.layout, data, id))
        }
    });
}

export { handleRoutes };
