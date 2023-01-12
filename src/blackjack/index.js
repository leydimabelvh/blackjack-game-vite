import _ from 'underscore';
import { createDeck } from './use-cases/create-deck';
import { getCard } from './use-cases/get-card';
import { showCardValue } from './use-cases/show-card-value' ;
import { showImageCard } from './use-cases/show-image-card';
import { generateComputerShift } from './use-cases/generate-computer-shift';
import { accumulatePoints } from './use-cases/accumulate-points';



/**
 * 2C = Two of Clubs (Tréboles)
 * 2D= Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */
let deck = [];

let types = ['C', 'D', 'H', 'S'],
    specials = ['A', 'J', 'K', 'Q'];

export let playersPoints = [];

//Referencias de HTML
const btnGetCard = document.querySelector("#btnGetCard"),
      btnStopGame = document.querySelector("#btnStopGame"),
      btnNewGame = document.querySelector("#btnNewGame");

export const tagPoints = document.querySelectorAll("span");

export const playersCards = document.querySelectorAll(".cardGame__container");

//Deshabilitar botones
btnGetCard.disabled = true;
btnStopGame.disabled = true;

deck = createDeck(types, specials);
getCard(deck);

//Eventos
btnGetCard.addEventListener('click', () => {
    const card = getCard(deck);
    // playerPoints = playerPoints + showCardValue();
    const playerPoints = accumulatePoints(card, 0);

    showImageCard(card, 0);

    //Control de puntos
    if (playerPoints > 21) {
        console.warn('Lo siento, perdiste.');
        btnGetCard.disabled = true;
        btnStopGame.disabled = true;
        generateComputerShift(playerPoints, deck);

    } else if (playerPoints === 21) {
        console.warn('¡Genial, 21!');
        btnGetCard.disabled = true;
        btnStopGame.disabled = true;
        generateComputerShift(playerPoints, deck);
    }
});

btnStopGame.addEventListener('click', () => {
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;

    generateComputerShift(playersPoints[0], deck);
});

btnNewGame.addEventListener('click', () => {
    console.clear();

    //Habilar botones
    btnGetCard.disabled = false;
    btnStopGame.disabled = false;
    
    //Resetear baraja
    deck = [];
    deck = createDeck(types, specials);

    let numberPlayers = 2;
    //Resetear puntos
    playersPoints = [];
    for (let i = 0; i < numberPlayers; i++) {
      playersPoints.push(0);
    }
    
    //Resetear texto de puntaje
    tagPoints.forEach(element => element.innerText = 0);

    //Remover imagen de carta
    playersCards.forEach(element => element.innerHTML = "");
});