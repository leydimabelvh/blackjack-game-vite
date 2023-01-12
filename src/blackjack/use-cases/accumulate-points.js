import { showCardValue } from "./show-card-value";
import { playersPoints, tagPoints } from "../";

export const accumulatePoints = (card, shift) => {
  // playersPoints[shift] = playersPoints[shift] + showCardValue();
  playersPoints[shift] += showCardValue(card);

  tagPoints[shift].innerText = playersPoints[shift];

  return playersPoints[shift];
};