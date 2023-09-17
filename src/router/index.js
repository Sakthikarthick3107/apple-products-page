import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CheckOutView from '../views/CheckOutView.vue'

const routes = [
  {
    path: '/',  
    name: 'home',
    component: HomeView
  },
  {
    path: '/:category/:index',
    name: 'product',
    component : ProductView,
    props : true
    //component: () => import('../views/AboutView.vue')
  },
  {
    path: '/checkout/:prodtype/:prod',
    name: 'checkout',
    component : CheckOutView,
    props : true
    //component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
