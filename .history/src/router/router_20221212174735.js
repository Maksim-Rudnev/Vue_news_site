import Main from '@/pages/MainPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import PostPage from '@/pages/PostPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

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
