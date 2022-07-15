<template>
  <div class="v-cart">
     <div class="content-conteiner-cart">CART</div>
     <div class="cart-table">
        <div class="cart-header"></div>
        <div class="product-container-table"> 
        </div>
     </div>
  </div>
</template>

<script>
import cartItem from "./Cart/cartItem.vue"

export default {
   name:"v-cart",
   props: {

   },
   data() {
      return{}
   },
   computed: {
      "cartItem":cartItem,
   }
}
</script>

<style>
.content-container-cart {
   margin: 0 5%;
}
.cart-table{
   margin-top: 5%;
   font-family: Montserrat;
   width: 100%;
}
.cart-header {
   width: 110%;
   font-family: Montserrat;
   flex-wrap: nowrap;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
}
.cart-header span {
   width: 0%;
   text-align: center;
   font-weight: 700;
}
/*cart-table and elements*/
.product-container-tabel {
   margin: auto;
}
.product-cart {
   display: flex;
   flex-wrap: nowrap;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 2%;
   text-align: center;
   margin-top: 5%;
   margin-left: 1%;
}
.product-img {
   width: 20%;
   height: 20%;
}
.product-photo {
   width: 20%;
   height: 20%;
   border: 2px solid #000;
   border-radius: 4px;
}
.product-name {
   width: 20%;
   height: 20%;
   font-size: 20px;
}

.product-price {
   width: 20%;
   height: 20%;
}
.product-counter {
   width: 20%;
   height: 20%;
   display: flex;
   align-content: stretch;
   justify-content: center;
}
.product-quantity {
   width: 20%;
   height: 20%;
   margin-top: 3%;
   color: rgb(0, 0, 0);
}
.product-subTotal {
   width: 20%;
   height: 20%;
}
.plus-product {
   border: none;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 900;
   font-size: 20px;
   color: #FFFFFF;
   background-color: rgb(235, 161, 24);
   cursor: pointer;
}
.plus-product:hover {
   color: #f79f2b;
   background: #fff;
}
.minus-product {
   border: none;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 900;
   font-size: 30px;
   align-items: center;
   color: #FFFFFF;
   background-color: rgb(235, 161, 24);
   cursor: pointer;
}

.minus-product:hover {
   color: #f79f2b;
   background: #fff;
}
.remove {
   border: none;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 900;
   font-size: 20px;
   color: #FFFFFF;
   background-color: rgb(235, 161, 24);
   cursor: pointer;
}
.remove:hover {
   color: #f79f2b;
   background: #fff;
}

.total-sum-price {
   text-transform: uppercase;
   text-align: center;
   text-shadow: 2px 2px red;
   color: rgb(255, 255, 255);
   font-size: 80px;
}
</style>