import _ from 'underscore';
import { createDeck } from './use-cases/create-deck';

/**
 * 2C = Two of Clubs (Tréboles)
 * 2D= Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];
let types = ['C', 'D', 'H', 'S'];
let specials = ['A', 'J', 'K', 'Q'];
let playerPoints = 0;
let computerPoints = 0;

//Referencias de HTML
const btnGetCard = document.querySelector('#btnGetCard');
const btnStopGame = document.querySelector('#btnStopGame');
const btnNewGame = document.querySelector('#btnNewGame');
const tagPoints = document.querySelectorAll('span');
const playerCards = document.querySelector('#player__cards');
const computerCards = document.querySelector('#computer__cards');

btnGetCard.disabled = true;
btnStopGame.disabled = true;


deck = createDeck(types, specials);

//Función que permite tomar una carta de la baraja
const getCard = () => {

    if (deck.length === 0) {
        throw 'Error: No hay cartas en la baraja.';
    } 

    const card = deck.pop();

    return card;
}

getCard();

//Función que permite saber el valor de la carta
const showCardValue = (card) => {
    // const value = card[0];
    const value = card.substring(0, card.length - 1);
    
    return ( isNaN(value) ) ? 
            ( ( value === 'A' ) ? 11 : 10 ) 
            : value * 1;

}

// showCardValue(getCard());


const generateComputerShift = (minimumPoints) => {
    do {

        const card = getCard();
        // computerPoints = computerPoints + showCardValue();
        computerPoints += showCardValue(card);
    
        console.log(card);
        console.log(computerPoints);
        
        tagPoints[1].innerText = computerPoints;
        console.log(tagPoints);
    
        //Insertar imagen de carta
        const imageCard = document.createElement('img');
        imageCard.src = `./assets/images/cards/${card}.png`;
        imageCard.classList.add('cardGame__image');
        imageCard.alt = 'Image of a deck of cards';
        imageCard.width = '120';
        computerCards.append(imageCard);

        if (minimumPoints > 21) {
            break;
        }
        
    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));


    setTimeout(() => {
        //Mostrar resultados
        if (computerPoints > 21) {
            alert('¡Ganó el jugador!');
            console.warn('¡Ganó el jugador!');
        } else if (minimumPoints > 21) {
            alert('¡Ganó la computadora!');
            console.warn('¡Ganó la computadora!');
        } else if (computerPoints === minimumPoints) {
            alert('Empate, niguno ganó.');
            console.warn('Empate, niguno ganó');
        } else {
            alert('¡Ganó la computadora!');
            console.warn('¡Ganó la computadora!');
        }

    }, 100);
}

//Eventos
btnGetCard.addEventListener('click', () => {
    const card = getCard();
    // playerPoints = playerPoints + showCardValue();
    playerPoints += showCardValue(card);

    console.log(card);
    console.log(playerPoints);
    
    tagPoints[0].innerText = playerPoints;
    console.log(tagPoints);

    //Insertar imagen de carta
    const imageCard = document.createElement('img');
    imageCard.src = `./assets/images/cards/${card}.png`;
    imageCard.classList.add('cardGame__image');
    imageCard.alt = 'Image of a deck of cards';
    imageCard.width = '120';
    playerCards.append(imageCard);

    //Control de puntos
    if (playerPoints > 21) {
        console.warn('Lo siento, perdiste.');
        btnGetCard.disabled = true;
        btnStopGame.disabled = true;
        generateComputerShift(playerPoints);

    } else if (playerPoints === 21) {
        console.warn('¡Genial, 21!');
        btnGetCard.disabled = true;
        btnStopGame.disabled = true;
        generateComputerShift(playerPoints);
    }
});

btnStopGame.addEventListener('click', () => {
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;

    generateComputerShift(playerPoints);
});

btnNewGame.addEventListener('click', () => {
    console.clear();
    //Habilar botones
    btnGetCard.disabled = false;
    btnStopGame.disabled = false;
    
    //Resetear baraja
    deck = [];
    deck = createDeck(types, specials);

    //Resetear puntos
    playerPoints = 0;
    computerPoints = 0;
    
    //Resetear texto de puntaje
    tagPoints[0].innerText = 0;
    tagPoints[1].innerText = 0;

    //Remover imagen de carta
    playerCards.innerHTML = '';
    computerCards.innerHTML = '';
});
