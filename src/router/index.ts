import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import FrontLayout from '@/views/FrontLayout.vue';
import LoginView from '@/views/LoginView.vue';
import Shop from '@/views/Shop.vue';
import Cart from '@/views/Cart.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'Home',
      component: Home,
    },
    { path: '/Front',
      name:'FrontLayout',
      component: FrontLayout,
      
    },
    { path: '/Login',
      name:'LoginView',
      component: LoginView,
      
    },
    {
      path: '/Shop',
      name:'Shop',
      component: Shop,    
    },
    {
      path: '/Cart',
      name:'Cart',
      component: Cart,
    }
  ]
})

export default router