import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Toolbar from "../views/Toolbar.vue"
import Test from "../views/Test.vue"
import Login from "../views/Login.vue"

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },


  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '',
    name: 'Toolbar',
    component: Toolbar,
    children: [
      {
        path: '',
        name: 'Test',
        component: Test,
        meta: { requiresAuth: true },
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
