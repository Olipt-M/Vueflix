import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'films',
      component: () => import('@/components/views/FilmsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/views/AboutView.vue')
    },
    {
      path: '/movies/:id',
      name: 'movie',
      component: () => import('@/components/views/MovieDescriptionView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/views/LoginView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/components/views/ShopView.vue')
    }
  ]
})

export default router
