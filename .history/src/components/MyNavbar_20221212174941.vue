<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div class="navbar">
      <div class="navbar__btns">
        <my-button
            @click="$router.push('/news')">
            Войти
        </my-button>
        <my-button
            @click="$router.push('/news')">
            Новости
        </my-button>
      </div>
    </div>
  </template>
<script>
</script>
<style scoped>
  .navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  .navbar__btns {
    display: flex;
  }
</style>
