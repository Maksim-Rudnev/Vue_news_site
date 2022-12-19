<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="post-list">
      <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"/>
    </transition-group>
  </div>
  <h2 v-else>Список пуст</h2>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  updated() {
    console.log('PostList beforeMount');
  beforeMount() {
    console.log('PostList beforeMount');
  },
};
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active, .post-list-leave-active {
  transition: all 0.25s ease;
}
.post-list-enter, .post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.25s;
}
</style>
