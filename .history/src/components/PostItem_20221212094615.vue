<template>
  <div class="post">
    <div>
      <div><strong>Тема:</strong>{{ post.theme }}</div>
      <div><strong>Название:</strong>{{ post.title }}</div>
      <div><strong>Описание:</strong>{{ post.text }}</div>
      <!-- <div v-if="post.user.login"><strong>Пользователь:</strong>{{ post.user.login }}</div> -->
      <div v-if="post.tags"><strong>Тег:</strong>{{ post.tags }}</div>
      <img v-if="post.images" alt="" :src="post.images"/>
    </div>
    <div class="post__btns">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
mo
</script>

<style scoped>
  .post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
}
.post__btns {
  display: flex;
  column-gap: 10px;
}
</style>
