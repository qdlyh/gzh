import Vue from 'vue'
import Router from 'vue-router'
import letfNav from '@/components/letfNav'
import myform from '@/components/content/myform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myform',
      component: myform
    }
  ]
})
