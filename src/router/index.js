import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Hoi from '../components/Hoi'
import Vueti from '../components/Vueti'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Hoi',
      component: Hoi
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
    },
    {
      path: '/vueti',
      name: 'Vueti',
      component: Vueti
    }
  ]
})