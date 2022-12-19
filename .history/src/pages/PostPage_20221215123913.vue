<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="header">
      <h1>Страница с постами</h1>
    </div>
    <div class="search-select">
      <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск..."
      />
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog
      :show="dialogVisibleError"
      @update:show="setDialogVisibleError"
    >
      <h1 style="color: brown"> {{ error }} </h1>
    </my-dialog>

    <my-dialog
      :show="dialogVisible"
      @update:show="setDialogVisible"
    >
      <my-auth></my-auth>
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
import MyAuth from '@/components/MyAuth.vue';
import {
  mapState,
  mapActions,
  mapGetters,
  mapMutations,
} from 'vuex';

export default {
  components: {
    PostList,
    MyAuth,
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
      setDialogVisible: 'dialog/setDialogVisible',
      setDialogVisibleError: 'dialog/setDialogVisibleError',
    }),
    ...mapActions({
      fetchPost: 'post/fetchPost',
    }),
  },
  beforeMount() {
    this.fetchPost();
  },
  computed: {
    ...mapState({
      limit: (state) => state.post.limit,
      page: (state) => state.post.page,
      isPostLoading: (state) => state.post.isPostLoading,
      error: (state) => state.dialog.error,
      dialogVisible: (state) => state.dialog.dialogVisible,
      dialogVisibleError: (state) => state.dialog.dialogVisibleError,
      searchQuery: (state) => state.post.searchQuery,
      selectedSort: (state) => state.post.selectedSort,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      countPage,
      slicePost: 'post/slicePost',
    }),
  },
  updated() {
    if (!this.page || this.page > this.countPage) this.setPage(this.countPage);
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
