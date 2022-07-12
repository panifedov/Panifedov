<template>
  <div class="v-catalog">
     <vcatalogItem
      v-for="product in PRODUCTS"
     :key="product.article"
     :product_data="product"
     @sendArticle="showChildeArticleInConsole"
     />
  </div>
</template>

<script>
import vcatalogItem from "./v-catalog-item.vue"
import {mapActions, mapGetters} from 'vuex'

export default {
   name:"v-catalog",
   components: {
      vcatalogItem
   },
   data() {
      return {

      }
   },
   computed: {
      ...mapGetters([
         'PRODUCTS'
      ])
   },
   methods: {
      ...mapActions([
         'GET_PRODUCTS_FROM_API'
      ]),
      showChildeArticleInConsole(data){
         console.log(data);
      }
   },
   mounted() {
      this.GET_PRODUCTS_FROM_API()
   }
}
</script>

<style>
.v-catalog {
     margin: 0 5%;
}
.v-catalog {
   gap: 10%;
   flex-basis: 25%;
   display: flex;
   flex-wrap: wrap;
   align-items: space-around;
   margin-top: 5%;
   justify-content: space-between;
}
</style>