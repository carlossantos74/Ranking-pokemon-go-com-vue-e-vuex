import Vue from 'vue';
import Vuex from 'vuex';

import ranking from './ranking.module';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ranking,
  },

  state: {
    users: [],
  },
  mutations: {
    addNewUser: (state, { nome, email }) => {
      state.users.push({
        nome,
        email,
        score: 0,
        id: Math.random(),
      });
      // eslint-disable-next-line
      return alert('Usuário Adicionado');
    },
    addPoints: (state, { id, value }) => {
      if (id === null || value === 0) {
        // eslint-disable-next-line
        alert('Valor inválido');
      } else {
        const usuario = state.users.find(item => {
          const igual = item.id === id;
          return igual;
        });
        usuario.score += value;
      }
    },
    cleanScore(state) {
      state.users.forEach(item => {
        // eslint-disable-next-line
        item.score = 0;
      });
    },
  },
  actions: {},
  getters: {},
});

window.store = store;

export default store;
