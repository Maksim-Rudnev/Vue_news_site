import Main from '@/pages/MainPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import PostIdPage from '@/pages/PostIdPage.vue';
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
    path: '/posts/:id',
    component: PostIdPage,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
  {
    path: '/composition',
    component: PostPageCompositionAPI,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
