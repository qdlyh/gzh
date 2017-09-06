import Vue from 'vue'
import Router from 'vue-router'
/* import letfNav from '@/components/reuse/letfNav' */
import myForm from '@/components/view/myForm'
import myCard from '@/components/view/myCard'
import userCard from '@/components/view/userCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userCard',
      component: userCard
    }
  ]
})
