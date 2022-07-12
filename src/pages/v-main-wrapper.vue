<template>
  <div class="v-main-wrapper">
     <v-catalog/>
     <v-cart/>
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue"
import vCart from "./v-cart.vue"
export default {
   components: {
      vCatalog,
      vCart
   }
}
</script>

<style>

</style>