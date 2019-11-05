import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/main.vue'
import Detail from '@/views/detail.vue'

import Home from '@/views/main/home.vue'
import Edu from '@/views/main/edu.vue'
import Idea from '@/views/main/idea.vue'
import Message from '@/views/main/message.vue'
import My from '@/views/main/my.vue'

import Type from '@/views/main/home/type.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/main/home/attention'
  },
  {
    path:'/detail/:id?',
    component:Detail
  },
  {
    path:'/main',
    component:Main,
    children:[{
      path:'/main/home',
      redirect:'/mian/home/attention',
      component:Home,
      children:[{
        path:'/main/home/:type?',
        component:Type
      }]
    },
    {
      path:'/main/edu',
      component:Edu
    },
    {
      path:'/main/idea',
      component:Idea
    },
    {
      path:'/main/message',
      component:Message
    },
    {
        path:'/main/my',
        component:My
    }
  ]

  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
