import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    component: App,
  },

  {
    path: '/about',
    name: About,
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', }
    }
    return { x: 0, y: 0 }
  },
})

export default router
