import Vue from 'vue'
import Router from 'vue-router'
import letfNav from '@/components/letfNav'
import myForm from '@/components/view/myForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myForm',
      component: myForm
    }
  ]
})
