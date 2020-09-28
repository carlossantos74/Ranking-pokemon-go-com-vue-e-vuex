<template>
  <div class="rank-list">
    <h3>Top 3 mestres</h3>
    <ul class="list top-03">
      <li v-for="(usuario, index) in topthree" :key="usuario.id">
        <div :class="{ king: index === 0 }" v-if="usuario.score > 0">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3305/3305421.svg"
            alt=""
          />
          <h2>#{{ index + 1 }} {{ usuario.nome }}</h2>
          <h6>Score {{ usuario.score }}</h6>
        </div>
      </li>
    </ul>

    <h3>Rank list</h3>
    <ul class="list">
      <li v-for="(usuario, index) in usuarios" :key="usuario.id">
        <div v-if="usuario.score > 0">
          <h2>#{{ index + 1 }} {{ usuario.nome }}</h2>
          <h6>Score {{ usuario.score }}</h6>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState({
      usuarios: (state) => state.users,
    }),
    ...mapGetters({ topthree: 'top3' }),
  },
};
</script>

<style lang="scss" scoped>
.rank-list {
  border-left: 0.5px solid rgba(0, 0, 0, 0.159);
  height: 90vh;
  width: 380px;
  overflow-y: auto;
  overflow-x: hidden;

  h3 {
    text-align: center;
    color: #666666;

    margin: 30px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.159);
    border-top: 0.5px solid rgba(0, 0, 0, 0.159);
  }

  .list {
    list-style: none;
    img {
      display: none;
    }

    div {
      width: 350px;
      height: 70px;

      margin: 10px 0px 10px 5px;

      border-radius: 5px;
      border: 0.2px solid rgba(0, 0, 0, 0.159);

      h2 {
        padding: 10px 0 0 0;
        font-size: 1.2em;
        text-align: center;
        color: #838383;
      }

      h6 {
        padding: 10px 0 0 0;
        font-size: 0.9em;
        text-align: center;
        color: #838383;
      }
    }
  }
  .king {
    img {
      display: block;
      width: 30px;

      position: relative;
      top: 4px;
      left: 10px;
    }

    h2,
    h6 {
      position: relative;
      top: -30px;
    }
  }
}
</style>
