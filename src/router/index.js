import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/opportunities',
    name: 'Opportunities',
    component: () => import(/* webpackChunkName: "opportunites" */ '../views/Opportunities.vue')
  },
  {
    path: '/opportunity/:id',
    name: 'Opportunity',
    component: () => import(/* webpackChunkName: "opportunity" */ '../views/Opportunity.vue')
  },
  {
    path: '/edit/opportunity/:id',
    name: 'Edit Opportunity',
    component: () => import(/* webpackChunkName: "editOpportunity" */ '../views/EditOpportunity.vue')
  },
  {
    path: '/create/opportunity',
    name: 'Create New Opportunity',
    component: () => import(/* webpackChunkName: "createOpportunity" */ '../views/CreateOpportunity.vue') 
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue') 
  },
  {
    path: '/users/:id',
    name: 'User View',
    component: () => import(/* webpackChunkName: "user" */ '../views/UserEdit.vue') 
  },
  {
    path: '/sign-in',
    name: 'Sign in',
    component: () => import('../views/SignIn.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
