import PostPage from '@/pages/PostPage.vue';
import MyAuth from '@/pages/MyAuth.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/news',
    component: PostPage,
  },
  {
    path: '/auth',
    component: MyAuth,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
