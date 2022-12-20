<template>
  <div class="navbar">
    <my-button @click="$router.push('/news')">
      Новости
    </my-button>

    <div class="right-panel">
      <my-button v-if="!isAuth" @click="setVisible(true), setSignUp(true)">
      Регистрация
    </my-button>
    <my-button id="login-user"
    v-else @click="$router.push(`/user/${this.id}`)">
      {{this.login}}
    </my-button>

    <my-button v-if="!isAuth" @click="setVisible(true), setSignUp(false)">
      Войти
    </my-button>
    <my-button v-else @click="signOut()">
      Выйти
    </my-button>
    </div>
  </div>
  <my-dialog
      :show="visible"
      @update:show="setVisible"
    >
      <my-auth></my-auth>
    </my-dialog>
</template>
<script>
import {
  mapMutations,
  mapState,
  mapActions,
} from 'vuex';
import MyAuth from '@/components/MyAuth.vue';

export default {
  components: {
    MyAuth,
  },
  methods: {
    ...mapMutations({
      setVisible: 'dialog/setVisible',
      setType: 'auth/setSignUp',
      setUserId: 'auth/setUserId',
      setUserLogin: 'auth/setUserLogin',
      setUserAuth: 'auth/setUserAuth',
    }),
    ...mapActions({
      whoAmI: 'auth/whoAmI',
    }),
    signOut() {
      this.setUserId(0);
      this.setUserLogin('');
      this.setUserAuth(false);
      localStorage.removeItem('token');
    },
  },
  computed: {
    ...mapState({
      id: (state) => state.auth.user.id,
      isAuth: (state) => state.auth.user.isAuth,
      login: (state) => state.auth.user.login,
      visible: (state) => state.dialog.visible,
    }),
  },
  beforeMount() {
    this.whoAmI();
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
#login-user {
  font-weight: bold;
  border: 0px;
  font-size: 20px;
  align-self: center;
}
</style>
