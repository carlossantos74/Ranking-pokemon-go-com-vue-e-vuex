<template>
  <div class="home">
    <div class="container-login">
      <img
        src="https://logodownload.org/wp-content/uploads/2016/08/Pokemon-Go-logo-1.png"
        alt=""
        srcset=""
      />
      <h2>Olá, Seja bem vindo</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non vitae obcaecati
      </p>

      <router-link to="/ranking" class="button">Ranking</router-link>
      <router-link to="/cadastro" class="button">Cadastre-se</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;

  background: #838383;

  .container-login {
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

    .button {
      display: inline-block;
      padding: 10px;
      margin: 0px 0px 0px 5px;
      border: none;
      border-radius: 5px;

      background: #838383;
      color: #fff;
      text-decoration: none;
      cursor: pointer;

      position: relative;
      top: 50px;
      left: 100px;
    }

    .button:hover {
      background: #b8b8b8bb;
    }
  }
}
</style>
