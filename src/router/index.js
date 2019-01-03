import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
// import city from '@/components/city.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    // {
    //   path: '/city',
    //   name: 'city',
    //   component: city
    // }
  ]
})
