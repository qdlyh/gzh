import Vue from 'vue'
import Router from 'vue-router'
import myForm from '@/components/view/myForm'
import myCard from '@/components/view/myCard'
import form from '@/components/view/form'
import userCard from '@/components/view/userCard'
import cardBox from '@/components/view/cardBox'
import empty from '@/components/view/empty'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'empty',
      component: empty
    },
    {
      path: '/myCard',
      name: 'myCard',
      component: myCard
    },
    {
      path: '/myForm',
      name: 'myForm',
      component: myForm
    },
    {
      path: '/cardBox',
      name: 'cardBox',
      component: cardBox
    }
  ]
})
