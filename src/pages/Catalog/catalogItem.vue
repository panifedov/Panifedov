<template>
 <div class="product-item" >
    <div class="product-item-h1">
      {{product_data.name}}
    </div>
    <img src="https://avotar.ru/avatar/krutye/150/18.jpg" />
    <div class="product-item-p">
      {{ product_data.text}}
    </div>
    <span class="gr">{{product_data.gr }} gr</span>
    <span class="price">{{ product_data.price }} $</span>
    <button class="to-cart-button"  @click="addToCart">
      ADD TO CART
    </button>
  </div>
</template>

<script>
export default {
   name:"catalogItem",
   props: {
      product_data: {
         type: Object,
         default() {
            return {}
         }
      }
   },
   data () {
      return {
      }
   },
   methods: {
    addToCart() {
      this.$set(this.product_data, "quantity", 1);
      this.$store.dispatch("ADD_TO_CART", this.product_data);
    }
  },
  mounted: {

  }
   
}
</script>

<style>
.product-item {
      width: 30%;
      height: 90%;
      background-color: #000;
      box-shadow: 4px 4px #f8f6f6;
      align-items: center;
      text-align: center;
      margin-bottom: 4%;
}
.product-item-h1 {
   position: relative;
   text-align: center;
   color: white;
   text-transform: uppercase;
   font-size: 20px;
   padding-top: 5%;
   margin-bottom: 5%;
}
img {
         align-items: center; 
      height: 18vw;
      margin-bottom: 5%;
}
.product-item-p {
      color: #fff;
   text-align: justify;
   width: 75%;
   padding: 3% 13%;
}
.gr {
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
.price {
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
.to-cart-button {
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
.to-cart-button:hover {
   color: rgb(233, 110, 22);
   background-color: #ffffff;
}
</style>