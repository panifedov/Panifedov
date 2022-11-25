<template>
  <div class="cart-table-row ">
    <div>
      <img src="https://avotar.ru/avatar/krutye/150/18.jpg" class="cart-img" />
    </div>
    <div class="cart-product-text">
      {{ cart_item.name }}: <br />{{ cart_item.gr}} gr
    </div>
    <div class="cart-table-quantity">
      <button @click="decrementItem" class="btnqty">-</button>
      {{ cart_item.quantity }}
      <button @click="incrementItem" class="btnqty">+</button>
    </div>
    <div class="cart-totalcost">{{ cart_item.price }} / {{ itemTotal }}</div>
    <div><button @click="removeFromCart" class="btn-cart">Remove</button></div>
  </div>
</template>

<script>

export default {
   name:"cartItem",
   props: {
      cart_item: {
      type: Object,
      default() {
         return {}
         }
      }
   },
   methods:{
      removeFromCart(){
         this.$store.dispatch("DELETE_FROM_CART", this.cart_item);
      },
      decrementItem() {
         this.$store.dispatch("DECREMENT_ITEM", this.cart_item);
      },
         incrementItem() {
         this.$store.dispatch("INCREMENT_ITEM", this.cart_item);
      }
   },
  computed: {
    itemTotal() {
      let total = this.cart_item.quantity * this.cart_item.price;
      return total;
    }
  }
}
</script>

<style>
.cart-img {
   width: 50%;
   height: 50%;
}
.cart-table-row div {
  width: 20%;
}
.cart-table-row img {
  width: 35%;
  border: 2px solid black;
  border-radius: 4px;
}
.cart-table-row button {
   border: none;
  width: 30%;
  text-decoration: none;
  background: #e48900;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  font-family: "Montserrat";
  line-height: 25px;
  cursor: pointer;
}
.btnqty {
   border: none;
  width: 10% !important;
}
.cart-table-row {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2%;
  text-align: center;
}
</style>
