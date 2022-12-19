<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <!-- <h1>{{ $store.state.post.limit }}</h1>
    {{$store.commit}} -->
    <div class="header">
      <h1>Страница с постами</h1>
    </div>
    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск..."
    />
    <div class="app__btns">
      <my-button @click="showDialog">
        Создать пост
      </my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisibleError">
      <h1 style="color: brown"> {{ this.error }} </h1>
    </my-dialog>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import {
  mapState,
  mapActions,
  mapGetters,
  mapMutations,
} from 'vuex';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      dialogVisibleError: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      fetchPost: 'post/fetchPost',
    }),

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((el) => el.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
  },
  mounted() {
    this.fetchPost();
  },
  watch: {
    page() {
      this.fetchPost();
    },
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPage: (state) => state.post.totalPage,
      isPostLoading: (state) => state.post.isPostLoading,
      error: (state) => state.post.error,
      dialogVisibleError: (state) => state.post.dialogVisibleError,
      searchQuery: (state) => state.post.searchQuery,
      selectedSort: (state) => state.post.selectedSort,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPost: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
  },
};
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
