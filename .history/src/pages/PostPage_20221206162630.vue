<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
      v-model="searchQuery"
      v-focus
      placeholder="Поиск...."
    />
    <div class="app__btns">
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <post-list
      v-if="!isPostsLoading"
      :posts="sortedAndSearchedPosts"
    />
    <div v-else>
      Идет загрузка...
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import usePosts from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

export default {
  components: {
    PostList,
  },
  setup() {
    const { posts, totalPages, isPostsLoading } = usePosts(8);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
      ],
    };
  },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
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

.observer {
  height: 30px;
  background: green;
}
</style>
