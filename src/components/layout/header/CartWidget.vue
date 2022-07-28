<template>
   <div class="v-cart-widget">
         <router-link :to="{ name: 'Cart' }">
            <div class="cart-logo">
               <div class="price-cart-counter">

               </div>
            </div>
            <div class="price-cart-price">
               {{cartTotalCost}}
            </div>
         </router-link>
   </div>
</template>

<script>

export default {
   name:'cartWidgetComponents',
   props:{},
   data () {
      return{
         title:'cartWidget'
      }
   },
   computed: {
      cart() {
         return this.$store.getters["CART"]
      }
   },
   methods:{

   },
   watch:{},
   mounted: {
      cartTotalCost() {
         result = []

         for (let item of this.cart) {
            result.push(item.price * item.quantity)
         }
         result = result.reduce(function(sum, el) {
            return sum+el;
         })
         return result;
      }
   },
}
</script>

<style >
.cart-href {
   display: flex;
   justify-content: flex-start;
   width: 300px;
   text-decoration: none;
   color: rgb(255, 255, 255);
}
.cart-logo {
   display: flex;
   align-items: center;
   position: relative;
   justify-content: space-evenly;
   margin: 0px 10px 0px 0px;
   height: 35px;
   width: 35px;
   border: 2px solid black;
   border-radius: 50%;
   color: #000;
   background-color: #000;
}
</style>