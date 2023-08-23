import { createRouter, createWebHistory } from 'vue-router';
import FilmsView from '@/components/views/FilmsView.vue';
import HomePageView from '@/components/views/HomePageView.vue';
import AboutView from '@/components/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/movies',
      name: 'films',
      component: () => import('@/components/views/FilmsView.vue')
    },
    {
      path: '/',
      name: 'homepage',
      component: () => import('@/components/views/HomePageView.vue')
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
    }
  ]
})

export default router
