<template>
  <div id="app">
     <mainWrapper/>
  </div>
</template>

<script>
//import headerWrapper from "./header/v-header-wrapper.vue"
import mainWrapper from "./pages/v-main-wrapper.vue"

export default {
  name: 'App',
  components: {
     //headerWrapper,
   mainWrapper
  }
}
</script>

<style>
body {
  background: #fcd71e;
}
@import url("https://fonts.googleapis.com/css?family=Monda|Montserrat|Roboto");
</style>
