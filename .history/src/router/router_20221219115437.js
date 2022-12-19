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
function* gSimple() {
  let i = 2;
  yield i;
  const a = [i];
  while (true) {
    ++i;
    if (a.some(v => !(i % v))) continue;
      a.push(i);
      yield i;
  }
}
const smp = gSimple();
for (let i = 0; i < 10; i++) smp.next();
console.log(smp.next().value);

export default router;
