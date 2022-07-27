<template>
  <div class="content-container">
     <div class="content-title">BEST PRODUCTS</div>
     <div class="v-catalog">
      <catalogItem
         v-for="product in products" 
         :key="product.article" 
         :product_data="product"
     />
     </div>
  </div>
</template>

<script>
import vcatalogItem from "./Catalog/catalogItem.vue"

export default {
   name:"catalogVue",
   components: {
      "catalogItem": vcatalogItem,
   },
   computed: {
      products() {
         return this.$store.getters["PRODUCTS"];
      }
   },
   data() {
      return {

      }
   },
}
</script>

<style>
.content-title {
    margin-left: 5%;
    font-family: 'Montserrat';
    font-size: 40px;
    text-decoration-line: underline;
    text-decoration-style: double;
    text-align: left;
    color: rgb(238, 239, 240);
}
.v-catalog {
     margin: 0 5%;
}
.v-catalog {
   gap: 5%;
   flex-basis: 25%;
   display: flex;
   flex-wrap: wrap;
   align-items: space-around;
   margin-top: 5%;
   justify-content: space-between;
}
</style>