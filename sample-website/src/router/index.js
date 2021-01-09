import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router