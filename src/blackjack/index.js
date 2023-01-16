import _ from "underscore";
import { accumulatePoints } from "./use-cases/accumulate-points";
import { createDeck } from "./use-cases/create-deck";
import { generateComputerShift } from "./use-cases/generate-computer-shift";
import { getCard } from "./use-cases/get-card";
import { showImageCard } from "./use-cases/show-image-card";
import { initialiseGame } from "./use-cases/initialise-game";

/**
 * 2C = Two of Clubs (Tréboles)
 * 2D= Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */
let deck = [];

let types = ["C", "D", "H", "S"],
  specials = ["A", "J", "K", "Q"];

export let playersPoints = [];

//Referencias de HTML
const btnGetCard = document.querySelector("#btnGetCard"),
      btnStopGame = document.querySelector("#btnStopGame"),
      btnNewGame = document.querySelector("#btnNewGame");

export let tagPoints = document.querySelectorAll("span");

export let playersCards = document.querySelectorAll(".cardGame__container");

//Deshabilitar botones
btnGetCard.disabled = true;
btnStopGame.disabled = true;

//Eventos
btnGetCard.addEventListener("click", () => {
  const card = getCard(deck);
  // playerPoints = playerPoints + showCardValue();
  const playerPoints = accumulatePoints(card, 0);

  showImageCard(card, 0);

  //Control de puntos
  if (playerPoints > 21) {
    console.warn("Lo siento, perdiste.");
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;
    generateComputerShift(playerPoints, deck);
  } else if (playerPoints === 21) {
    console.warn("¡Genial, 21!");
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;
    generateComputerShift(playerPoints, deck);
  }
});

btnStopGame.addEventListener("click", () => {
  btnGetCard.disabled = true;
  btnStopGame.disabled = true;

  generateComputerShift(playersPoints[0], deck);
});

btnNewGame.addEventListener("click", () => {
    const {newDeck, newPlayersPoints, newTagPoints, newPlayersCards} = initialiseGame(deck, playersPoints, tagPoints, playersCards, types, specials);
    
    deck = newDeck;
    playersPoints = newPlayersPoints;
    tagPoints = newTagPoints;
    playersCards = newPlayersCards;
});
