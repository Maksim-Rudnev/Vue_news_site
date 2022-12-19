<template>
  <div class="navbar">
    <my-button @click="$router.push('/news')">
      Новости
    </my-button>
    <div class="right-panel">
      <my-button v-if="!isAuth" @click="setDialogVisible(true), setSignUp(true)">
      Регистрация
    </my-button>
    <my-button style="font-weight: bold; border: 0px; font-size: 20px;
    align-self: center;" v-else @click="setDialogVisible(true), setSignUp(true)">
      login
    </my-button>

    <my-button v-if="!isAuth" @click="setDialogVisible(true), setSignUp(false)">
      Войти
    </my-button>
    <my-button v-else @click="setDialogVisible(true), setSignUp(false)">
      Выйти
    </my-button>
    </div>
  </div>
</template>
<script>
import {
  mapMutations,
  mapState,
} from 'vuex';

export default {
  methods: {
    ...mapMutations({
      setDialogVisible: 'post/setDialogVisible',
      setSignUp: 'auth/setSignUp',
    }),
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.user.isAuth,
    }),
  },
};
</script>
<style scoped>
.navbar {
  height: 55px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
}
.right-panel {
  display: flex;
  column-gap: 15px;
}
</style>
