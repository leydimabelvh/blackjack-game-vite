import { getCard } from './get-card';
import { showCardValue } from './show-card-value';
import { showImageCard } from './show-image-card';
import { determinateResult } from './determinate-result' ;


export const generateComputerShift = (minimumPoints, deck, tagPoints, computerCards) => {
    let computerPoints = 0;
    
    do {
        const card = getCard(deck);
        // computerPoints = computerPoints + showCardValue();
        computerPoints += showCardValue(card);
    
        console.log(card);
        console.log(computerPoints);
        
        tagPoints.innerText = computerPoints;
        console.log(tagPoints);
    
        showImageCard(card, computerCards);

        if (minimumPoints > 21) {
            break;
        }
        
    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));


    determinateResult(computerPoints, minimumPoints);
}