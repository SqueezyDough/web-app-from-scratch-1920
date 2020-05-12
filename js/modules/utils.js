export function getAllClassesFromCollection(data) {
    return Object.values(data.Set)
}

// goes one level deeper than a usual flat()
export function getCardsFromCollection(classes) {
    return classes.reduce( (accumulator, currentValue) => {
        const classCards = currentValue[0].Collection
        return accumulator.concat(classCards)
    }, []
    ) 
}

export function getCardById(cards, id) {
    return cards.find(card => card.cardId === id);
}

// changes the card name to 'useless crap' is a card costs 0
export function doSomethingPrettyWithMap(cards) {
    return cards.map(card => {
        if (card.cost === 0) {
            card.name = 'useless crap!';
        }

        return card;
    })
}