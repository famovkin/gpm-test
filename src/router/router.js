import { createRouter, createWebHashHistory } from 'vue-router';

import UserPage from '@/pages/UserPage.vue';
import Dashboard from '@/pages/Dashboard.vue';

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/:id',
    component: UserPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
