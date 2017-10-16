import Vue from 'vue'
import Router from 'vue-router'
import wx from 'weixin-js-sdk'
import myForm from '@/components/view/myForm'
import myCard from '@/components/view/myCard'
import form from '@/components/view/form'
import userCard from '@/components/view/userCard'
import cardBox from '@/components/view/cardBox'
import empty from '@/components/view/empty'
import cardEmpty from '@/components/view/cardEmpty'
import cardForm from '@/components/view/cardForm'

Vue.use(Router)

const Foo1 = () => view('../cardBox')
const Foo2 = () => view('../cardForm')
const Foo3 = () => view('../myCard')
const Foo4 = () => view('../myForm')

export default new Router({
  routes: [{
      path: 'empty',
      name: 'empty',
      component: empty
    },
    {
      path: '/cardEmpty',
      name: 'cardEmpty',
      component: cardEmpty
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
    },
    {
      path: '/cardForm/:id',
      name: 'cardForm',
      component: cardForm
    },
  ]
})
