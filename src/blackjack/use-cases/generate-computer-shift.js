import { getCard } from './get-card';
import { showCardValue } from './show-card-value';
import { showImageCard } from './show-image-card';
import { determinateResult } from './determinate-result' ;
import { accumulatePoints } from './accumulate-points';


export const generateComputerShift = (minimumPoints, deck, tagPoints, computerCards) => {
    let computerPoints = 0;
    
    do {
        const card = getCard(deck);

        computerPoints = accumulatePoints( card, computerPoints, tagPoints);
    
        showImageCard(card, computerCards);

        if (minimumPoints > 21) {
            break;
        }
        
    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));


    determinateResult(computerPoints, minimumPoints);
}