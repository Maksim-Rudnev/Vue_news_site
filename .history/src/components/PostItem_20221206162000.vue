<template>
  <div class="post">
    <div>
      <div><strong>Тема:</strong>{{ post.theme }}</div>
      <div><strong>Название:</strong>{{ post.title }}</div>
      <div><strong>Описание:</strong>{{ post.text }}</div>
      <div v-if="post.tags"><strong>Тег:</strong>{{ post.tags }}</div>
      <img alt="" v-if="post.images" src="https://www.befunky.com/images/prismic/0cd24dfa-814b-49cb-9205-f1652f492acb_features-photo-enhancer.png?auto=avif,webp&format=jpg&width=420"/>
    </div>
    <div class="post__btns">
      <my-button
        @click="$emit('remove', post)"
        >Удалить
      </my-button>
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
