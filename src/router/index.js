import { createRouter, createWebHistory } from 'vue-router';
import FilmsView from '@/components/views/FilmsView.vue';
import HomePageView from '@/components/views/HomePageView.vue';
import AboutView from '@/components/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'films',
      component: () => import('@/components/views/FilmsView.vue')
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: () => import('@/components/views/HomePageView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/views/AboutView.vue')
    }
  ]
})

export default router
