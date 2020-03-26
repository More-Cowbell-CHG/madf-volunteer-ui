import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/SignIn.vue')
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
    component: () => import(/* webpackChunkName: "opportunites" */ '../views/Opportunities.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/opportunity/:id',
    name: 'Opportunity',
    component: () => import(/* webpackChunkName: "opportunity" */ '../views/Opportunity.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/edit/opportunity/:id',
    name: 'Edit Opportunity',
    component: () => import(/* webpackChunkName: "editOpportunity" */ '../views/EditOpportunity.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/create/opportunity',
    name: 'Create New Opportunity',
    component: () => import(/* webpackChunkName: "createOpportunity" */ '../views/CreateOpportunity.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/users/:id',
    name: 'User View',
    component: () => import(/* webpackChunkName: "user" */ '../views/UserEdit.vue'),
    meta: {requiresAuth: true}
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

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');
  if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next("/sign-in")
  }
  next();
})

export default router
