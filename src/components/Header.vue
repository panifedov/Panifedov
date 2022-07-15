<template>
   <div class="header-wrapper">
      <logo/>
      <navigation/>
      <cartWidget/>
   </div>
</template>

<script>
import cartWidget from "./header/CartWidget.vue"
import logo from "./header/Logo.vue"
import navigation from "./header/Navigation.vue"

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
.header-wrapper {
  margin: 2% 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 6%;
}

</style>