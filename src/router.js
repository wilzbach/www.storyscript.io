import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/Event')
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('@/views/NotFound')
    },
    {
      path: '*',
      component: () => import('@/views/NotFound')
    }
  ]
})
