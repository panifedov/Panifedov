<template>
  <div id="app">
     <router-view/>
     <headerWrapper/>

  </div>
</template>

<script>
import headerWrapper from "./header/HeaderWrapper.vue"


export default {
  name: 'App',
  components: {
     headerWrapper,

  }
}
</script>

<style>
body {
  background: #fcd71e;
}
@import url("https://fonts.googleapis.com/css?family=Monda|Montserrat|Roboto");
</style>
