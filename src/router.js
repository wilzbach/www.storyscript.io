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
      component: Home,
      children: [{
        path: '',
        name: 'home',
        components: {
          head: () => import('@/views/Home/Head'),
          player: () => import('@/views/Home/Player'),
          tagline: () => import('@/views/Home/Tagline'),
          demo: () => import('@/views/Home/Demo'),
          join: () => import('@/views/Home/Join'),
          // benefits: () => import('@/views/Home/Benefits'),
          // platform: () => import('@/views/Home/Platform'),
          opensource: () => import('@/views/Home/OpenSource'),
          foot: () => import('@/views/Home/Foot')
        }
      }]
    },
    {
      path: '/new',
      name: 'home-new',
      component: () => import('@/views/HomeNew')
    },
    {
      path: '/about',
      name: 'about',
      meta: { noNav: true },
      component: () => import('@/views/About')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { noNav: true },
      component: () => import('@/views/Contact')
    },
    {
      path: '*',
      name: 'not-found',
      meta: { darkNav: true },
      component: () => import('@/views/NotFound')
    }
  ]
})
