// id: render item, no id: render collection

function renderTemplate(template, data, id) {
    // TODO: details view
    id ? renderCard(template, data) : renderCollection(template, data);

    

    console.log(data)
}

function renderCollection(template, data) {
    const insertContainer = document.querySelector('.collection-overview');
    insertContainer.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));
}

function renderCard(template, data) {
    const insertContainer = document.querySelector('.details-overview');
    insertContainer.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));

    toggleViews();
}

function toggleViews(id) {
    const activeId = document.getElementById(id);



    // const collection = document.querySelector('.collection-overview');
    // const details = document.querySelectorAll('.details-overview');

    // details.forEach(overview => {
    //     overview
    // })

    // collection.classList.add('is-hidden');
    // details.classList.toggle('is-hidden');
}

export { renderTemplate }