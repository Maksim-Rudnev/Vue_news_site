<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div class="navbar">
      <my-button
        @click="$router.push('/news')">
        Войти
      </my-button>
      <my-button
        @click="$router.push('/news')">
        Новости
      </my-button>
    </div>
  </template>
<script>
</script>
<style scoped>
  .navbar {
    height: 55px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }
</style>
