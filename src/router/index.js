import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dinopage',
      component: () => import('../views/DinoPage.vue')
    }
  ]
})

export default router
