import { playersCards } from "../";

export const showImageCard = (card, shift) => {
    //Insertar imagen de carta
    const imageCard = document.createElement("img");
    imageCard.src = `./assets/images/cards/${card}.png`;
    imageCard.classList.add("cardGame__image");
    imageCard.alt = "Image of a deck of cards";
    imageCard.width = "120";
    playersCards[shift].append(imageCard);
  };