<template>
<div class="v-catalog-item">
  <div class="products-item-name">
    <h1>{{product_data.name}}</h1>
  </div>
  <img src="http://via.placeholder.com/150x150" alt="">
  <div class="product-item-info"> {{product_data.text}}</div>
  <div class="span-info">
    <span class="span-price">{{product_data.price}}$</span>
    <span class="span-gr">{{product_data.gr}}gr</span>
  </div>
  <button class="button-in-cart" @click="sendDataToParent">ADD TO CART</button>
</div>
</template>

<script>
export default {
 name:"v-catalog-item",
 props: {
    product_data: {
       type: Object,
       default() {
          return
       }
    }
 },
 methods: {
    sendDataToParent() {
       this.$emit( 'sendArticle', this.product_data.article)
    }
 }
}
</script>

<style>
.v-catalog-item {
   flex-basis: 25%;
      width: 30%;
      height: 90%;
      background-color: #000;
      box-shadow: 4px 4px #f8f6f6;
      align-items: center;
      text-align: center;
      margin-bottom: 4%;
}
.v-catalog-item img {
   align-items: center; 
   height: 18vw;
   margin-bottom: 5%;
}
.products-item-name {
   position: relative;
   text-align: center;
   color: white;
   text-transform: uppercase;
   font-size: 20px;
   padding-top: 5%;
   margin-bottom: 5%;
}
.product-item-info {
   color: #fff;
   text-align: justify;
   width: 75%;
   padding: 3% 13%;
}
.span-info {
   display: flex;
   justify-content: space-between;

}
.span-price {
   /*display: flex;
   color: #fff;
   margin-left: 5%;
   margin-bottom: 3%;
   justify-content: left;
   align-items: initial;*/
   display: inline-block;
   color: #fff;
   padding-top: 5%;
   width: 35%;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 900;
   font-size: 24px;
   line-height: 29px;
}
.span-gr {
   /*display: flex;
   color: #fff;
   margin-left: 5%;
   margin-bottom: 3%;
   justify-content: left;
   align-items: initial;*/
   display: inline-block;
   color: #fff;
   padding-top: 5%;
   width: 35%;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 900;
   font-size: 24px;
   line-height: 29px;
}
.button-in-cart {
   border: none;
   width: 50%;
   text-decoration: none;
   display: inline-block;
   background: #ff9900;
   color: white;
   text-transform: uppercase;
   font-size: 18px;
   font-family: 'Montserrat';
   line-height: 41px;
   margin-top: 5%;
   margin-bottom: 10%;
   cursor: pointer;
}
.button-in-cart:hover {
   color: rgb(233, 110, 22);
   background-color: #ffffff;
}
</style>