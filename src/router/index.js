import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cocktails from '../views/Cocktails.vue'
import Favorites from '../views/Favorites.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Favorites',
    name: 'Favorites',
    component: Favorites
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/Favorites.vue')
  },
  {
    path: '/Cocktails',
    name: 'Cocktails',
    component: Cocktails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
