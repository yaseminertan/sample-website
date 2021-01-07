import Vue from 'vue'
import VueRouter from 'vue-router'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router