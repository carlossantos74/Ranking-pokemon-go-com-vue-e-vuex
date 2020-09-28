<template>
  <div class="cadastro">
    <div class="container-cadastro">
      <img src="https://logodownload.org/wp-content/uploads/2016/08/Pokemon-Go-logo-1.png" alt="" />
      <h2>Cadastre-se</h2>
      <label for="nome">Nome</label>
      <input type="text" v-model="nome" name="nome" />
      <label for="email">E-mail</label>
      <input type="text" v-model="email" name="email" />
      <button to="/ranking" class="button" @click="onAddNewUserClick">
        Enviar
      </button>
      <router-link to="/ranking" class="button">Ranking</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      nome: '',
      email: '',
    };
  },
  methods: {
    onAddNewUserClick() {
      this.addNewUser({ nome: this.nome, email: this.email });
    },
    ...mapMutations(['addNewUser']),
  },
};
</script>

<style lang="scss" scoped>
.cadastro {
  width: 100vw;
  height: 100vh;

  background: #838383;

  .container-cadastro {
    background: #fff;
    width: 400px;
    height: 400px;
    border-radius: 5px;

    position: absolute;
    top: 20%;
    left: 40%;

    h2 {
      color: #838383;
      text-align: center;

      margin: 20px;
    }

    img {
      width: 50%;
      position: relative;
      left: 25%;
      top: 10px;
    }

    p {
      text-align: center;
      color: #838383;
    }

    input {
      display: block;
      padding: 10px 10px;
      margin: 5px 0px;
      width: 250px;

      border: solid 0.5px #ccc;
      border-radius: 4px;
    }

    label {
      color: #838383;
      font-weight: 500;
    }

    input,
    label {
      position: relative;
      left: 60px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      margin: 0px 0px 0px 5px;
      border: none;
      border-radius: 5px;

      background: #838383;
      color: #fff;
      cursor: pointer;

      position: relative;
      top: 30px;
      left: 150px;
    }

    .button:hover {
      background: #b8b8b8bb;
    }
  }
}
</style>
