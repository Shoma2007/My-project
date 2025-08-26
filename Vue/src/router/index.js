import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/UI/Dashboard.vue";
import HomePage from "@/layout/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/dashboard",
      component: Dashboard,
    },
  ],
});

export default router;
