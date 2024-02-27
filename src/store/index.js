import Vue from 'vue'
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {  //Variables que serán pasadas entre los componentes
    miVariable:'VALOR UNO',
    Persona: {
      nombre:'',
      apellido:'',
      edad:null,
      tel:'',
      codigo:'',
    },
  },
  mutations: {  //Funciones para cambiar el valor de las variables
    actualizarMiVariable(state, nuevoValor) {
      state.miVariable = nuevoValor;
    },

  },
  actions: {  //Funciones para realizar acciones asincronas y llamar a mutaciones
    actualizarMiVariable({ commit }, nuevoValor) {
      commit('actualizarMiVariable', nuevoValor);
    },
    
  }
})
