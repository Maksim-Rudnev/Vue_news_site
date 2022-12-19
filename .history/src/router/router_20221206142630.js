import Main from '@/pages/MainPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import PostPageCompositionAPI from '@/pages/PostPageCompositionAPI.vue';
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
    path: '/news',
    component: PostPageCompositionAPI,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
