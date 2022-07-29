<template>
   <div class="v-cart-widget">
         <router-link :to="{ name: 'Cart' }">
            <div class="cart-logo">
               <div class="price-cart-counter">
                  {{cartItemTotal}}
               </div>
            <div class="price-cart-price">
               {{cartTotalCost}}
            </div>
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
      },
      cartTotalCost() {
         let result = []

         for (let item of this.cart) {
            result.push(item.price * item.quantity)
         }
         result = result.reduce(function(sum, el) {
            return sum+el;
         })
         return result;
      },
      cartItemTotal() {
         let result = []

         for (let item of this.cart) {
            result.push(item.quantity)
         }
         result = result.reduce(function(sum, el) {
            return sum+el;
         })
         return result;
      }
   },
   methods:{

   },
   watch:{},
   mounted: {

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
.price-cart-price {
   position: absolute;
   margin-left: 90px;
   font-style: normal;
   font-family: "Montserrat";
   color: #000;
   font-size: 24px;
   vertical-align: 50%;
}
.price-cart-counter {
  color: white;
  font-family: "Roboto";
   text-decoration: underline;
   text-decoration-color: #000;

}
</style>