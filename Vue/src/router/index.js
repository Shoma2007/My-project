import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Main from '../components/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/dashboard', 
    component: Dashboard
  },
    {
      path: '/login', 
      component: Main,
      alias: '/'
  },
  ],
})

export default router
