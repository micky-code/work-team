import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/index.astro';
import About from '../pages/about.astro';
import Product from '../pages/product.astro';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/product', component: Product },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;