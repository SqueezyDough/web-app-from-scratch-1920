// id: render item, no id: render collection

import * as overviewTemplate from './templates/collection.js'
import * as store from './store.js'

export function renderTemplate(template, data, id) {
    id ? renderCard(template, data, id) : renderCollection(template, data);
}

function renderCollection(template, data) {
    const insertContainer = document.querySelector('.collection-overview');
    insertContainer.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));
}

function renderCard(template, card, id) {
    const classNames = ['Mage', 'Druid', 'Shaman','Demon Hunter', 'Paladin', 'Hunter', 'Priest', 'Warlock', 'Warrior', 'Rogue', 'Neutral']

    // render overview is a class is targeted as id
    if (!classNames.includes(id)) {
        const insertContainer = document.querySelector('.details-overview');
        insertContainer.insertAdjacentHTML('beforeend', Mustache.to_html(template, card));
    
        toggleViews(id);
    } else {
        renderCollection(overviewTemplate.layout, store.getLocalStorageItems())
    }
}

function toggleViews(id) {
    const activeId = document.getElementById(id);
    const collection = document.querySelector('.collection-overview');

    window.scrollTo(0, 0);

    // remove is-hidden class from active window
    activeId.classList.remove('is-hidden')

    // hide collection overview
    collection.classList.add('is-hidden');
}