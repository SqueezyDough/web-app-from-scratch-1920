function cleanData(data) {
    // set that is always in the standard hearthstone format
    const everGreenSet = getEverGreenSet(data);
    const collectableCards = getCollectableCards(everGreenSet);
    const sortedCollectableCards = sortSet(collectableCards);

    return createRenderableObject(sortedCollectableCards);
}

function getCollectableCards(data) {
    const setWithoutHeroObjects = removeHeroObjects(data);
    return getCollectables(setWithoutHeroObjects)
}

function sortSet(data) {
    const setSortedByManaCost = sortByManaCost(data);
    return sortByClass(setSortedByManaCost, 'playerClass');
}

// gets the evergreen set from the dataset
function getEverGreenSet(data) {
    return data['Basic'].concat(data['Classic'])
}

// remove non collectabkle hero objects
function removeHeroObjects(data) {
    return data.filter(card => card.type !== 'Hero' && card.type !== 'Hero Power')
}

// get all collectable cards
function getCollectables(data) {
    return data.filter(card => card.collectible)
}

// create an object that the template engine can render
function createRenderableObject(data) {
    return { Set: data }
}

// sort cards by mana cost
function sortByManaCost(data) {
    return data.sort((a, b) => a.cost - b.cost)
}

// sort by class
function sortByClass(data, property) {
    return data.reduce((acc, obj) => {
        // property value
        let key = obj[property]

        // check if class exists
        // create a new array for new class
        if (!acc[key]) {
            acc[key] = [];
            acc[key].push({
                ClassName: key,
                Collection: []
            })
        }

        // push obj to array
        acc[key][0].Collection.push(obj)

        return acc;
    }, {})
}

export default { cleanData };