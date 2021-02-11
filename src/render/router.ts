import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Sites from './views/Sites.vue'
import Services from './views/Services.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Homepage'
        }
    },
    {
      path: '/sites',
      name: 'sites',
      component: Sites,
      meta: {
        title: 'Sites'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      meta: {
        title: 'Services'
      }
    }
  ]
})

export default router
