//路由管理模块

import Home from '../pages/Home/Home'
import Classify from '../pages/Classify/Classify'
import Discern from '../pages/Discern/Discern'
import Cart from '../pages/Cart/Cart'
import Profile from '../pages/Profile/Profile'

import LoginPhone from '../pages/Profile/LoginPhone'
import Content from '../pages/Classify/Content'
import CurrentCate from '../pages/Discern/currentCate'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      showFooterNav: true
    }
  },
  {
    path: '/classify',
    component: Classify,
    redirect:'/classify/1022001',
    meta: {
      showFooterNav: true
    },
    children:[
      {
        path:'/classify/:id',
        component:Content,
        meta:{
          showFooterNav:true
        }
      }
    ]
  },
  {
    path: '/discern',
    component: Discern,
    redirect:'/discern/0',
    meta: {
      showFooterNav: true
    },
    children: [
      {
        path:'/discern/:id',
        component:CurrentCate,
        meta:{
          showFooterNav:true
        },
      }
    ]
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      showFooterNav: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showFooterNav: false
    },
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/profile/loginphone',
    component:LoginPhone
  }
]
