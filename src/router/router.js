import Vue from 'vue'
import Router from 'vue-router'

import Home from "../pages/Home.vue";
import Catalog from "../pages/Catalog.vue";
import Contacts from "../pages/Contacts.vue";
import Testimonials from "../pages/Testimonials.vue";
import Cart from "../pages/Cart.vue";

Vue.use(Router)

let router = new Router( {
   routes: [
      {
         path: '/',
         name: 'Home',
         commponent: Home
      },
      {
         path: '/',
         name: 'Catalog',
         commponent: Catalog
      },
      {
         path: '/',
         name: 'Contacts',
         commponent: Contacts
      },
      {
         path: '/',
         name: 'Testimonials',
         commponent: Testimonials
      },
      {
         path: '/',
         name: 'Cart',
         commponent: Cart
      }
   ]
})

export default router;