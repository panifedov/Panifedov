<template>
  <div id="app">
     <app-header/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"


export default {
  name: 'App',
  components: {
     "app-header": Header,

  },

}
</script>

<style>
body {
  background: #fcd71e;
}
@import url("https://fonts.googleapis.com/css?family=Monda|Montserrat|Roboto");
</style>