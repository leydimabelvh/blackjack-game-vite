//Función que permite tomar una carta de la baraja

export const getCard = (deck) => {

    if (deck.length === 0) {
        throw 'Error: No hay cartas en la baraja.';
    } 

    return deck.pop();
}
