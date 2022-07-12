<template>
   <div class="v-header-wrapper">
      <logo/>
      <navigation/>
      <cartWidget/>
   </div>
</template>

<script>
import cartWidget from "./header-componnents/v-cart-widget.vue"
import logo from "./header-componnents/v-logo.vue"
import navigation from "./header-componnents/v-navigation.vue"

export default {
   name:'header-wrapper',
   components: {
      cartWidget,
      logo,
      navigation
   },
   props:{},
   data () {
      return{
         title:'header-wrapper'
      }
   },
   computed: {},
   methods:{},
   watch:{},
   mounted () {

   },
}
</script>

<style >
.v-header-wrapper {
  margin: 2% 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 6%;
}
.header-childelement {
  text-align: center;
}
</style>