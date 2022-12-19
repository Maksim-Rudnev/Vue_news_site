<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <my-navbar></my-navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavbar from '@/components/MyNavbar.vue';

export default {
  components: {
    MyNavbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
