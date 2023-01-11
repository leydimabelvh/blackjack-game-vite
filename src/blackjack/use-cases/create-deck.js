import _ from 'underscore';

//Función que crea una nueva baraja

export function createDeck(types, specials) {
    let deck = [];

    for (let i = 2; i < 11; i++) {
        for (const type of types) {
            deck.push(i + type);
        }        
    }

    for (const special of specials) {
        for (const type of types) {
            deck.push(special + type);
        }
    }

    deck = _.shuffle( deck );

    return deck;
}
