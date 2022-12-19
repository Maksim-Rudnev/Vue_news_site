import Main from '@/pages/MainPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import PostPageWithStore from '@/pages/PostPageWithStore.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
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
