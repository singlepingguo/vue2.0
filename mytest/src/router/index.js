import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Community from '@/pages/community'
import Omnibus from '@/pages/omnibus'
import Mine from '@/pages/mine'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/omnibus',
      name: 'Omnibus',
      component: Omnibus
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/',
      redirect: '/Home'
    }
  ]

})
