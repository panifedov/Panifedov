import Vue from 'vue'
import Router from 'vue-router'

import Home from "../pages/Home.vue";
import Catalog from "../pages/Catalog.vue";
import Contacts from "../pages/Contacts.vue";
import Testimonials from "../pages/Testimonials.vue";
import Cart from "../pages/Cart.vue";
import Appvue from "../App.vue"

Vue.use(Router)

let router = createRouter( {
   routes: [
      {
         path:'/',
         name:'Appvue',
         commponent:Appvue
      },
      {
         path: '/Home',
         name: 'Home',
         commponent: Home
      },
      {
         path: '/Catalog',
         name: 'Catalog',
         commponent: Catalog
      },
      {
         path: '/Contacts',
         name: 'Contacts',
         commponent: Contacts
      },
      {
         path: '/Testimonials',
         name: 'Testimonials',
         commponent: Testimonials
      },
      {
         path: '/Cart',
         name: 'Cart',
         commponent: Cart
      }
   ]
})

export default router;