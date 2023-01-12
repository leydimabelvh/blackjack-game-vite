import { getCard } from './get-card';
import { showImageCard } from './show-image-card';
import { determinateResult } from './determinate-result' ;
import { accumulatePoints } from './accumulate-points';
import { playersPoints } from '../index'; 

export const generateComputerShift = (minimumPoints, deck) => {
    let computerPoints = 0;
    
    do {
        const card = getCard(deck);

        computerPoints = accumulatePoints( card, playersPoints.length - 1 );
    
        showImageCard(card, playersPoints.length - 1);
        
    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));


    determinateResult(computerPoints, minimumPoints);
}