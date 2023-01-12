export const determinateResult = (computerPoints, minimumPoints) => {

    // const [minimumPoints, computerPoints] = playersPoints ;

    setTimeout(() => {
        //Mostrar resultados
        if (computerPoints > 21) {
          alert("¡Ganó el jugador!");
          console.warn("¡Ganó el jugador!");
        } else if (minimumPoints > 21) {
          alert("¡Ganó la computadora!");
          console.warn("¡Ganó la computadora!");
        } else if (computerPoints === minimumPoints) {
          alert("Empate, niguno ganó.");
          console.warn("Empate, niguno ganó");
        } else {
          alert("¡Ganó la computadora!");
          console.warn("¡Ganó la computadora!");
        }
      }, 100);
  }