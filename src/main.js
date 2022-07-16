import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Routes from "./router/router.js";
import * as VueGoogleMaps from 'vue2-google-maps'
//import "./assets/reset.css";
//import "./assets/styles.css";

Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {

   load: {
   key: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE',
   libraries: 'places',
   }
   
});

const router = new VueRouter({
   routes: Routes,
   mode: "history"
 });

new Vue({
   router,
  render: h => h(App),
}).$mount('#app')
