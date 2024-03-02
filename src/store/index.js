import Vue from 'vue'
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {  //Variables que serán pasadas entre los componentes
    jugador1: {
      id_jugador:'',
      nombre:'',
      puntuacion:''
    },
    jugador2: {
      id_jugador:'',
      nombre:'',
      puntuacion:''
    },
  },
  mutations: {  //Funciones para cambiar el valor de las variables
    actualizarJugadores(state, nuevoJugador) {
      state.Jugadores = nuevoValor;
    },

  },
  actions: {  //Funciones para realizar acciones asincronas y llamar a mutaciones
    actualizarJugadores({ commit }, nuevoJugador) {
      commit('actualizarJugadores', nuevoJugador);
    },
    
  }
})
