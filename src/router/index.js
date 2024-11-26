import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Ruta ajustada si está en una carpeta diferente
import AboutView from '../views/AboutView.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/about', name: 'About', component: AboutView },
  ],
});

export default router;