import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Hoi from '../components/Hoi'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/dist',
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hoi',
      name: 'Hoi',
      component: Hoi
    }
  ]
})