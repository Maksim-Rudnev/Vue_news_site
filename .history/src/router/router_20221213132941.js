import PostPage from '@/pages/PostPage.vue';
import 
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/news',
    component: PostPage,
  },
  {
    path: '/auth',
    component: My,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
