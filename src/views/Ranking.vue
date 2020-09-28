<template>
  <div class="rank">
    <img
      src="https://logodownload.org/wp-content/uploads/2016/08/Pokemon-Go-logo-1.png"
      alt=""
      srcset=""
    />

    <h1>Pokemon GO - Ranking</h1>
    <RankList />
    <div class="container-rank">
      <h3>Selecione o usuário e dê os pontos</h3>
      <select name="usuarios" v-model="selectedUser">
        <option>No-Value</option>
        <option
          v-for="usuario in usuarios"
          :key="usuario.id"
          :value="usuario.id"
        >
          {{ usuario.nome }}
        </option>
      </select>

      <select name="pontos" v-model="valueSelect">
        <option v-for="option in optionsSelect" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
    <button class="button" @click="onAddPoints">Atualizar Ranking</button>
    <div class="button" @click="onCleanPoints">Limpar Ranking</div>
    <br />
    <br />
    <router-link to="/" class="button"> Voltar a Home</router-link>
    <router-link to="/cadastro" class="button"> Cadastre-se </router-link>
  </div>
</template>

<script>
import RankList from '@/components/RankList.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    RankList,
  },
  data() {
    return {
      valueSelect: 0,
      optionsSelect: [5, 10, 15, 20, 25],
      selectedUser: null,
    };
  },

  methods: {
    onAddPoints() {
      this.addPoints({ id: this.selectedUser, value: this.valueSelect });
    },
    onCleanPoints() {
      this.cleanScore();
    },
    ...mapMutations(['addPoints', 'cleanScore']),
  },

  computed: {
    ...mapState({
      usuarios: (state) => state.users,
    }),
  },
};
</script>

<style lang="scss">
.rank {
  margin: 0.5% 2%;

  .rank-list {
    position: absolute;
    right: 5px;
    top: 20px;
  }

  img {
    width: 220px;
  }

  h1 {
    color: #838383;
  }

  .container-rank {
    h3 {
      margin: 10px 0px 10px 5px;
      color: #838383;
    }

    select {
      padding: 10px 10px;
      margin: 0px 0px 0px 5px;
      color: #838383;
      background: #fff;
      border: 0.5px solid rgba(0, 0, 0, 0.4);
    }

    select[name='usuarios'] {
      padding: 10px 40px;
    }
  }

  .button {
    display: inline-block;
    padding: 10px;
    margin: 10px 0px 0px 5px;
    border: none;
    border-radius: 5px;

    background: #838383;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  .button:hover {
    background: #b8b8b8bb;
  }
}
</style>
