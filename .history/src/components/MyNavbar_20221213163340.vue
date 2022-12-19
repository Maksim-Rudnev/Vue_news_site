<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="navbar">
    <my-button @click="$router.push('/news')">
      Новости
    </my-button>
    <my-button @click="set">
      Войти
    </my-button>
  </div>
</template>
<script>
import {
  mapMutations,
} from 'vuex';

export default {
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
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
</style>
