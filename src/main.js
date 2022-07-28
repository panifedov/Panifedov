import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Routes from "./router/router.js";
import * as VueGoogleMaps from 'vue2-google-maps'
import store from "./vuex/store.js"
//import "./assets/reset.css";
//import "./assets/styles.css";

Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {

   load: {
   key: 'AIzaSyAG3sS7X9d3ESBMSqdsB22Eonq87mYUjAM',
   libraries: 'places',
   }
   
});

const router = new VueRouter({
   routes: Routes,
   mode: "history"
 });

new Vue({
   store,
   router,
  render: h => h(App),
}).$mount('#app')
