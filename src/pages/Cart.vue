<template>
  <div class="cart-page">
       <div class="content-container">
    <div class="content-title">PRODUCT IN CART</div>
    <div class="cart-table">
      <div class="cart-table-header">
        <span>Photo</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Item Cost <br />one/total</span>
        <span>Actions</span>
      </div>
    </div>
    <cart-item 
      v-for="item in cart" 
      :key="item.article"
      :cart_item="item"
    />
   </div>
   
</div>
</template>

<script>
import CartItem from "./Cart/cartItem.vue"

export default {
   name:"СartPage",
   components:{
      "cart-item":CartItem,
   },

   data() {
      return{

      }
   },
   computed: {
      cart() {
         return this.$store.getters["CART"]
      }
   }
}
</script>

<style>
.cart-table {
  margin-top: 5%;
  font-family: "Montserrat";
  width: 100%;
}
.cart-table-header span {
  width: 20%;
  text-align: center;
  font-weight: bold;
}
.cart-table-header {
  font-family: "Montserrat";
  flex-wrap: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

</style>