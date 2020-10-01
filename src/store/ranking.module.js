export default {
  namespaced: true,

  mutations: {},
  actions: {},
  getters: {
    calcRank(state, getters, rootState) {
      const rank = rootState.users.sort((usuarioA, usuarioB) => {
        return usuarioB.score - usuarioA.score;
      });

      return rank;
    },

    top3(state, getters) {
      return getters.calcRank.slice(0, 3);
    },
  },
};
