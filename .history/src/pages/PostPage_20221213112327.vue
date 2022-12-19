<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <div class="header">
      <h1>Страница с постами</h1>
    </div>
    <div class="search-select">
      <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery" placeholder="Поиск..." />
      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisibleError">
      <h1 style="color: brown"> {{ error }} </h1>
    </my-dialog>
    <post-list :posts="slicePost" v-if="!isPostLoading" />
    <div v-else>Идет загрузка...</div>
    <div class="page__wrapper">
      <div v-for="pageNumber in countPage" :key="pageNumber" class="page" :class="{
        'current-page': page === pageNumber
      }" @click="setPage(pageNumber)">
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import {
  mapState,
  mapActions,
  mapGetters,
  mapMutations,
} from 'vuex';

export default {
  components: {
    PostList,
  },
  methods: {
    beforeMount() {
      this.fetchPost();
    },
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      fetchPost: 'post/fetchPost',
    }),
  },

  computed: {
    ...mapState({
      page: (state) => state.post.page,
      isPostLoading: (state) => state.post.isPostLoading,
      error: (state) => state.post.error,
      dialogVisible: (state) => state.post.dialogVisible,
      dialogVisibleError: (state) => state.post.dialogVisibleError,
      searchQuery: (state) => state.post.searchQuery,
      selectedSort: (state) => state.post.selectedSort,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      countPage: 'post/countPage',
      slicePost: 'post/slicePost',
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
  column-gap: 10px;
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

.search-select {
  display: flex;
  align-items: center;
  margin: 15px 0;
  column-gap: 20px;
}
</style>
