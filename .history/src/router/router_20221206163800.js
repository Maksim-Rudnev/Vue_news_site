import Main from '@/pages/MainPage.vue';
import PostPage from '@/pages/PostPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import PostIdPage from '@/pages/PostIdPage.vue';
import PostPageWithStore from '@/pages/PostPageWithStore.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/posts/:id',
    component: PostIdPage,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
