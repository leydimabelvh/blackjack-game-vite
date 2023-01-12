import { showCardValue } from "./show-card-value";


export const accumulatePoints = (card, shift, tagPoints) => {
    // playersPoints[shift] = playersPoints[shift] + showCardValue();
    shift += showCardValue(card);

    tagPoints.innerText = shift;

    return shift;
  };