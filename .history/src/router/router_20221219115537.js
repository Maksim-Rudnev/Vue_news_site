import { createRouter, createWebHistory } from 'vue-router';

import PostPage from '@/pages/PostPage.vue';

const routes = [
  {
    path: '/news',
    component: PostPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});



export default router;
