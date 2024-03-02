<!-- COMPONENTE 2: UI-->
<!-- nombre archivo: C02.vue -->
<template>
    <div id="grid_C02">
      <h2>Registro de Partida</h2>
      <form @submit.prevent="registrarPartida">
        <section>
            <div id="player1" class="coolinput">
                <label for="input" class="text">Jugador 1:</label>
                <input type="text" id="jugador1" v-model="jugador1.nombre" name="input" class="input formulario_in">
            </div>
            <div id="player2" class="coolinput">
                <label for="input" class="text">Jugador 2:</label>
                <input type="text" id="jugador2"  v-model="jugador2.nombre" name="input" class="input formulario_in">
            </div>
        </section>
        <!-- @click="enviarDatos() -->
        <button id="start" type="button" >Iniciar Partida</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  

  export default {
    setup() {
      // Datos de los jugadores
      const jugador1 = ref('');
      const jugador2 = ref('');
  
      // Método para registrar la partida
      const registrarPartida = () => {
        // Aquí puedes implementar la lógica para enviar los datos a tu backend mediante una petición HTTP (por ejemplo, utilizando Axios)
        console.log('Jugador 1:', jugador1.value);
        console.log('Jugador 2:', jugador2.value);
      };

      // Método para reiniciar el formulario
      const reset = () => {
          jugador1.value = ''; // Reinicia el valor del jugador 1
          jugador2.value = ''; // Reinicia el valor del jugador 2
      };
  
      return {
        jugador1,
        jugador2,
        registrarPartida,
        reset
      };
    }
  };
  </script>
  
  <style scoped>
     /* GRID */
    #grid_C02 { 
        width: 100%;
        height:50%; 
        margin: 0 auto;
        display: grid;
        grid-gap: 0px;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-template-areas:  
            "H2 H2"                     
            "S S"
            "ST ST";
        align-items: center;
        justify-items: center;
        text-align: center;
        
    }
    h2{
        grid-area: H2;
        font-family: "Henny Penny", cursive;
    }
    section{
        grid-area: S;
        margin-bottom: 10px;
        display: flex;
        justify-items: center;
    }
    #player1{
        grid-area: P1;
    }
    #player1{
        grid-area: P2;
    }
    #start{
        grid-area: ST;
    }
/* Styles inputs jugador */
    .coolinput {
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    max-width: 240px;
    }

    .coolinput label.text {
    font-size: 0.75rem;
    color: #818CF8;
    font-weight: 700;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 7px;
    padding: 0 3px;
    background: #e8e8e8e3;
    border-radius: 5px;
    width: fit-content;
    }

    .coolinput input[type=text].input {
    padding: 11px 10px;
    font-size: 0.75rem;
    border: 2px #818CF8 solid;
    border-radius: 5px;
    background: #e8e8e8;
    }

    .coolinput input[type=text].input:focus {
    outline: none;
    }


  .registro-partida {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .input-group {
    margin-bottom: 10px;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>