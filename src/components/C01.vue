<!-- COMPONENTE 1: FUNCIONAMIENTO JUEGO -->
<template>
    <div id="grid_game">
      <button id="C1" @click="makeMove(0)">{{ cells[0] }}</button>
      <button id="C2" @click="makeMove(1)">{{ cells[1] }}</button>
      <button id="C3" @click="makeMove(2)">{{ cells[2] }}</button>
  
      <button id="C4" @click="makeMove(3)">{{ cells[3] }}</button>
      <button id="C5" @click="makeMove(4)">{{ cells[4] }}</button>
      <button id="C6" @click="makeMove(5)">{{ cells[5] }}</button>
  
      <button id="C7" @click="makeMove(6)">{{ cells[6] }}</button>
      <button id="C8" @click="makeMove(7)">{{ cells[7] }}</button>
      <button id="C9" @click="makeMove(8)">{{ cells[8] }}</button>

        <!-- Alerta de ganador -->
        <div v-if="winner" class="alert alert-primary" role="alert">
            ¡{{ winner }} ha ganado!
        </div>

        <!-- Alerta de empate -->
        <div v-if="tie" class="alert alert-primary" role="alert">
            ¡Empate!
        </div>
    </div>
    
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const cells = reactive(["", "", "", "", "", "", "", "", ""]);
        let currentPlayer = "X"; // Jugador actual (puede ser "X" o "O")
        let gameOver = false; // Indica si el juego ha terminado
        const winner = ref("");
        const tie = ref(false);

        const makeMove = (index) => {
        if (!winner.value && !tie.value && cells[index] === "") {
            cells[index] = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
        };

        const checkWinner = () => {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
                [0, 4, 8], [2, 4, 6] // Diagonales
            ];
            for (let pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (
                cells[a] &&
                cells[a] === cells[b] &&
                cells[a] === cells[c]
                ) {
                winner.value = cells[a];
                return;
                }
            }
            if (!cells.includes("")) {
                tie.value = true;
            }
        };

        return { cells, makeMove, winner, tie };
    }
};
</script>

<style>
    .alert {
        padding: 10px;
        margin-top: 20px;
        border-radius: 5px;
        font-size: 18px;
    }
    * {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    /* Celda 1: Colum1 Fil1 */
    #grid_game { 
        width: 50%;
        height: 100%;
        margin: 0 auto;
        display: grid;
        grid-gap: 0px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas:                       
            "C1 C2 C3"
            "C4 C5 C6"
            "C7 C8 C9";
    }
    /* BORDES  DE LAS CELDAS */

    /* CELDAS */
    #C1 {
        grid-area: C1;
    }
    #C2 {
        grid-area: C2;
        border-left: solid;
        border-right: solid;
    }
    #C3 {
        grid-area: C3;
    }
    #C4 {
        grid-area: C4;
        border-top: solid;
        border-bottom: solid;
        
    }
    #C5 {
        grid-area: C5;
        border: solid;
    }
    #C6 {
        grid-area: C6;
        border-top: solid;
        border-bottom: solid;
    }
    #C7 {
        grid-area: C7;
    }
    #C8 {
        grid-area: C8;
        border-left: solid;
        border-right: solid;
    }
    #C9 {
        grid-area: C9;
    }

    h2{
        grid-area: H2;
    }
    button {
        background-color: #ff000000;
        border: none;
        cursor: pointer;
        width: 100%; /* Ancho preestablecido */
        height: 100%; /* Alto preestablecido */
        min-width: 50px; /* Establece un ancho mínimo */
        min-height: 70px; /* Establece un alto mínimo */
        font-size: 75%; /* Tamaño de fuente */
        transition: background-color 0.3s ease;
        
    }

    button:hover {
        background-color: #002fb180;
        border-radius: 10%;
    }

    button:focus {
        outline: none;
    }

</style>