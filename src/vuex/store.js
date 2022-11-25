import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
   state: {
      cart: JSON.parse(localStorage.getItem("cartItem")) || [],
      products: [
         {
            available:true,
            article:"T1",
             name: "goose",
             image: "http://via.placeholder.com/150x150",
             gr: 3,
             price: 220,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:true,
            article:"T2",
             name: "shock",
             image: "https://avotar.ru/avatar/krutye/150/18.jpg",
             gr: 1,
             price: 543,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:true,
            article:"T3",
             name: "ninja",
             image: "https://avotar.ru/avatar/krutye/150/18.jpg",
             gr: 2,
             price: 252,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:false,
            article:"T4",
             name: "apple",
             image: "https://avotar.ru/avatar/krutye/150/18.jpg",
             gr: 6,
             price: 111,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:true,
            article:"T5",
             name: "chitos",
             image: "https://avotar.ru/avatar/krutye/150/18.jpg",
             gr: 5,
             price: 532,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:true,
            article:"T6",
             name: "red",
             image: "https://avotar.ru/avatar/krutye/150/18.jpg",
             price: 611,
             gr: 2,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         }
      ]
   },
   getters: {
      CART(state){
         return state.cart
      },
      PRODUCTS(state) {
        return state.products;
      },
    },
    actions:{
      ADD_TO_CART({ commit }, product) {
         commit("ADD_STATE_CART", product);
    },
    DELETE_FROM_CART({commit}, cart_item) {
      commit("REMOVE_CART_ITEM",  cart_item);
    },
    DECREMENT_ITEM({commit}, cart_item) {
       commit("DECREMENT_STATE_QUANTITY",cart_item)
    },
    INCREMENT_ITEM({commit}, cart_item) {
      commit("INCREMENT_STATE_QUANTITY",cart_item)
   }
   },

   mutations:{
      ADD_STATE_CART:(state, product) => {
         if (state.cart.length) {
            let isProductExist = false;
            state.cart.map(function (item){
               if(item.article === product.article){
                  isProductExist = true;
                  item.quantity++
               } 
            })
            if(!isProductExist) {
               state.cart.push(product)
            }
         } else {
            state.cart.push(product)
         }
         
      },
   
      REMOVE_CART_ITEM:(state,cart_item) => {
         let index = state.cart.indexOf(cart_item);
         if (index !== -1) {
         state.cart.splice(index, 1);
         }
      },
      DECREMENT_STATE_QUANTITY:(state,cart_item) => {
         if (cart_item.quantity > 1){
            cart_item.quantity--
         }
      } ,
      INCREMENT_STATE_QUANTITY:(state,cart_item) => {
         cart_item.quantity++
      } 
   },
});

export default store;