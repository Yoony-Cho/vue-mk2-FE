import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue';
import BlogDetail from './components/BlogDetail.vue';

const routes = [
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/detail/:id",
    component: BlogDetail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 