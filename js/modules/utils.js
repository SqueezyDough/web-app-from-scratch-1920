export function getAllClassesFromCollection(data) {
    console.log(data)
    return Object.values(data.Set)
}

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