import { createRouter, createWebHistory } from 'vue-router';

import PostPage from '@/pages/PostPage.vue';
import UserPage from '@/pages/UserPage.'

const routes = [
  {
    path: '/news',
    component: PostPage,
  },
  {
    path: '/user/:id',
    component: UserPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
