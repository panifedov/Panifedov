import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
   state: {
      cart:[
         {
            available:true,
            article:"T1",
             name: "goose",
             image: "1.jpeg",
             gr: 3,
             price: 220,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:true,
            article:"T2",
             name: "shock",
             image: "1.jpeg",
             gr: 1,
             price: 543,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
      ],
      products: [
         {
            available:true,
            article:"T1",
             name: "goose",
             image: "1.jpeg",
             gr: 3,
             price: 220,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:true,
            article:"T2",
             name: "shock",
             image: "1.jpeg",
             gr: 1,
             price: 543,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:true,
            article:"T3",
             name: "ninja",
             image: "1.jpeg",
             gr: 2,
             price: 252,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:false,
            article:"T4",
             name: "apple",
             image: "1.jpeg",
             gr: 6,
             price: 111,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:true,
            article:"T5",
             name: "chitos",
             image: "1.jpeg",
             gr: 5,
             price: 532,
             text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
         },
         {
            available:true,
            article:"T6",
             name: "red",
             image: "1.jpeg",
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
         commit("PUSH_TO_CART", product);
    },
    mutations:{
      PUSH_TO_CART:(state, product) => {
         state.cart.push(product)
      }
    }
    }
});

export default store;