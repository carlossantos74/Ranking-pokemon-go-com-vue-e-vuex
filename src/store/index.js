import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
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
      const usuario = state.users.find(item => {
        const igual = item.id === id;
        return igual;
      });

      usuario.score += value;
    },

    cleanScore(state) {
      state.users.forEach(item => {
        // eslint-disable-next-line
        item.score = 0;
      });
    },
  },
  actions: {},
  getters: {
    calcRank(state) {
      const rank = state.users.sort((usuarioA, usuarioB) => {
        return usuarioB.score - usuarioA.score;
      });

      return rank;
    },

    top3(state, getters) {
      return getters.calcRank.slice(0, 3);
    },
  },
});
