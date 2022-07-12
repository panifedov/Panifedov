<template>
   <div class="v-cart-widget">
<div href="/cart.html" class="cart-href">
            <div class="cart-logo">
               <div class="price-cart-counter">

               </div>
            </div>
            <div class="price-cart-price">
               
            </div>
         </div>
   </div>
</template>

<script>

export default {
   name:'v-cartWidget',
   props:{},
   data () {
      return{
         title:'cartWidget'
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