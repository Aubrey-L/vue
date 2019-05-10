import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import Intent from '@/components/Intent'
import home from '@/components/home'
import need from '@/components/need'
import quote from '@/components/quote'
import VueResource from 'vue-resource'
import  homeChild from  '@/components/HomeChild'
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: { navShow: true, cname: '' },
    },
    {
      path: '/Intent',
      name: 'Intent',
      component: Intent,
      meta: { navShow: true, cname: '' },
    },
    {
      path: '/',
      name: 'home',
      component: home,
      meta: { navShow: true, cname: '' }

    },
    {
      path: '/need',
      name: 'need',
      component: need,
      children:[

      ],
      meta: { navShow: true, cname: '' },
    },

    {
      path: '/quote',
      name: 'quote',
      component: quote,
      meta: { navShow: true, cname: '' },
    },
    {
      path: '/homeChild',
      name: 'homeChild',
      component: homeChild,
      meta: { navShow: false, cname: '' },
    }
  ]
})
