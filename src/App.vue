<template>
  <div id="app">
     <Header/>
     <router-view />
  </div>
</template>

<script>
import Header from "./components/HeaderVue.vue"


export default {
  name: 'App',
  components: {
     Header,
  }
}
</script>

<style>
body {
  background: #fcd71e;
}
@import url("https://fonts.googleapis.com/css?family=Monda|Montserrat|Roboto");
</style>
