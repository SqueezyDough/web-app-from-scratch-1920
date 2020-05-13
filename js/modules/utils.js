export function lookupCard(data, id) {
        // get requested card
        const classes = getAllClassesFromCollection(data)
        const cards = getCardsFromCollection(classes)

        // example so I can show off a map function
        const usingZeroCostCardsIsCheating = doSomethingPrettyWithMap(cards)
        console.log('crappified 0-cost cards', usingZeroCostCardsIsCheating)

        return getCardById(cards, id)     
}

export function getCardById(cards, id) {
    return cards.find(card => card.cardId === id);
}

function getAllClassesFromCollection(data) {
    return Object.values(data.Set)
}

// goes one level deeper than a usual flat()
function getCardsFromCollection(classes) {
    return classes.reduce( (accumulator, currentValue) => {
        const classCards = currentValue[0].Collection
        return accumulator.concat(classCards)
    }, []
    ) 
}

// changes the card name to 'useless crap' is a card costs 0
function doSomethingPrettyWithMap(cards) {
    return cards.map(card => {
        if (card.cost === 0) {
            card.name = 'useless crap!';
        }

        return card;
    })
}