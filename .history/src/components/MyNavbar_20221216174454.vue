<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="navbar">
    <my-button @click="$router.push('/news')">
      Новости
    </my-button>
    <div class="right-panel">
      <my-button @click="setDialogVisible(true), setSignUp(true)">
      Регистрация
    </my-button>
    <my-button @click="setDialogVisible(true), setSignUp(false)">
      Войти
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
      setSignUp: 'user/setSignUp',
    }),
  },
  computed: {
    ...mapState({

    }),
  }
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
