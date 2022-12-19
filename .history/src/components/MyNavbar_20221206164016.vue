<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div class="navbar">
      <div class="navbar__btns">
        <my-button
          @click="$router.push('/')">
          Домой
        </my-button>
        <my-button
          style="margin-left: 20px;"
          @click="$router.push('/about')">
          О сайте
        </my-button>
        <my-button
          style="margin-left: 20px;"
          @click="$router.push('/store')">
          Новости
        </my-button>
        <my-button
          style="margin-left: 20px;"
          @click="$router.push('/composition')">
          Composition
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
    margin-left: auto;
  }
</style>
