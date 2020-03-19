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
    path: '/create/opportunity',
    name: 'Create New Opportunity',
    component: () => import(/* webpackChunkName: "createOpportunity" */ '../views/CreateOpportunity.vue') 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
