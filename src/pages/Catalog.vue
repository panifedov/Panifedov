<template>
  <div class="catalog-page">
     <vcatalogItem
      v-for="product in PRODUCTS"
     :key="product.article"
     :product_data="product"
     @sendArticle="showChildeArticleInConsole"
     />
  </div>
</template>

<script>
import vcatalogItem from "./Catalog/catalogItem.vue"


export default {
   name:"CatalogPage",
   components: {
      vcatalogItem
   },
   data() {
      return {

      }
   },
   computed: {

   },
   methods: {

   },

}
</script>

<style>
.catalog-page {
     margin: 0 5%;
}
.catalog-page {
   gap: 10%;
   flex-basis: 25%;
   display: flex;
   flex-wrap: wrap;
   align-items: space-around;
   margin-top: 5%;
   justify-content: space-between;
}
</style>