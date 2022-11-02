import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import VSlide from '@/components/VSlide.vue';
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/login', component: VSlide },
  ],
  strict: true,
});
