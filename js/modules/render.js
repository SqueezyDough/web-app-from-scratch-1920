// id: render item, no id: render collection

export function renderTemplate(template, data, id) {
    id ? renderCard(template, data, id) : renderCollection(template, data);
}

function renderCollection(template, data) {
    const insertContainer = document.querySelector('.collection-overview');
    insertContainer.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));
}

function renderCard(template, card, id) {
    const insertContainer = document.querySelector('.details-overview');
    insertContainer.insertAdjacentHTML('beforeend', Mustache.to_html(template, card));

    console.log(insertContainer)

    toggleViews(id);
}

function toggleViews(id) {
    console.log(id);

    const activeId = document.getElementById(id);
    const detailsWindows = document.querySelectorAll('.details-overview');
    const collection = document.querySelector('.collection-overview');

    

    // hide all windows
    // detailsWindows.forEach(details => {
    //     details.classList.add('is-hidden')
    // })

    // remove is-hidden class from active window
    activeId.classList.remove('is-hidden')

    // hide collection overview
    collection.classList.add('is-hidden');

    console.log(activeId)
}