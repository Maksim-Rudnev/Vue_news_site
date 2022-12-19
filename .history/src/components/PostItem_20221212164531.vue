<template>
  <div class="post">
    <div>

      </div>
      <img v-if="post.images" alt="" :src="post.images"/>
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
