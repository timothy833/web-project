import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'Home',
      component: () => import('../views/Home.vue'),},
    { path: '/front',
      name:'FrontLayout',
      component: () => import('../views/FrontLayout.vue'),
      
    },
    { path: '/login',
      name:'LoginView',
      component: () => import('../views/LoginView.vue'),
      
    },
    // {
    //   path: '/Cart',
    //   name:'Cart',
    //   component: () => import('../views/Cart.vue'),
    // },
    // {
    //   path: '/ShopList',
    //   name:'ShopList',
    //   component: () => import('../views/ShopList.vue'),
    // },
    {
      path: '/Shop',
      name:'ShopNav',
      component: () => import('../views/ShopNav.vue'),
      children:[{
          path: 'List',
          name:'ShopList',
          component: () => import('../views/ShopList.vue'),

        },{ 
          path: 'Cart',
          name:'Cart',
          component: () => import('../views/Cart.vue'),
        },],
    },
  ]
})

export default router