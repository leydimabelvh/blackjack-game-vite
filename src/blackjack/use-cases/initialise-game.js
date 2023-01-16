import { createDeck } from "./create-deck";
// import { tagPoints } from "../";

//Función que inicializar el juego

export const initialiseGame = (deck, playersPoints, tagPoints, playersCards, types, specials, numberPlayers = 2) => {
  console.clear();

  //Resetear baraja
  deck = createDeck(types, specials);
  console.log(deck);
  //Resetear puntos
  playersPoints = [];
  for (let i = 0; i < numberPlayers; i++) {
    playersPoints.push(0);
  }
  
  //Resetear texto de puntaje
  tagPoints.forEach(element => element.innerText = 0);

  //Remover imagen de carta
  playersCards.forEach(element => element.innerHTML = "");

  //Habilitar botones
  btnGetCard.disabled = false;
  btnStopGame.disabled = false;

  const dataUpdated = {
    newDeck:deck, 
    newPlayersPoints:playersPoints, 
    newTagPoints:tagPoints, 
    newPlayersCards:playersCards
  };


  return  dataUpdated;
};


  