//Función que permite saber el valor de la carta

export const showCardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    
    return ( isNaN(value) ) ? 
            ( ( value === 'A' ) ? 11 : 10 ) 
            : value * 1;
}