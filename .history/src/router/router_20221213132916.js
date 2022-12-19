import PostPage from '@/pages/PostPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/news',
    component: PostPage,
  },
  {
    path: '/a',
    component: PostPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
