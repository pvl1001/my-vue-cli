import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

const store = new Vuex.Store( {

   state: {
      count: 0,
    //   cards: [
    //      {
    //         id: 1,
    //         img: 'Photo (1).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 6000,
    //         rating: 0,
    //         qty: 1,
    //         date: '10.10.2020'
    //      },
    //      {
    //         id: 2,
    //         img: 'Photo (1).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 4800,
    //         rating: 0,
    //         qty: 1,
    //         date: '10.06.2020'
    //      },
    //      {
    //         id: 3,
    //         img: 'Photo (2).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 5290,
    //         rating: 2,
    //         qty: 1,
    //         date: '01.10.2020'
    //      },
    //      {
    //         id: 4,
    //         img: 'Photo (3).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 2800,
    //         rating: 10,
    //         qty: 1,
    //         date: '10.10.2020'
    //      },
    //      {
    //         id: 5,
    //         img: 'Photo (4).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 3400,
    //         rating: 1,
    //         qty: 1,
    //         date: '10.10.2019'
    //      },
    //      {
    //         id: 6,
    //         img: 'Photo (1).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 6000,
    //         rating: 6,
    //         qty: 1,
    //         date: '10.10.2020'
    //      },
    //      {
    //         id: 7,
    //         img: 'Photo (1).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 4800,
    //         rating: 6,
    //         qty: 1,
    //         date: '01.03.2020'
    //      },
    //      {
    //         id: 8,
    //         img: 'Photo (2).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 5290,
    //         rating: 0,
    //         qty: 1,
    //         date: '11.06.2020'
    //      },
    //      {
    //         id: 9,
    //         img: 'Photo (3).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 2800,
    //         rating: 10,
    //         qty: 1,
    //         date: '10.01.2020'
    //      },
    //      {
    //         id: 10,
    //         img: 'Photo (4).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 3400,
    //         rating: 9,
    //         qty: 1,
    //         date: '10.05.2019'
    //      },
    //      {
    //         id: 11,
    //         img: 'Photo (1).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 6000,
    //         rating: 8,
    //         qty: 1,
    //         date: '12.11.2018'
    //      },
    //      {
    //         id: 12,
    //         img: 'Photo (1).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 4800,
    //         rating: 3,
    //         qty: 1,
    //         date: '20.12.2019'
    //      },
    //      {
    //         id: 13,
    //         img: 'Photo (2).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 5290,
    //         rating: 0,
    //         qty: 1,
    //         date: '13.12.2020'
    //      },
    //      {
    //         id: 14,
    //         img: 'Photo (3).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 2800,
    //         rating: 2,
    //         qty: 1,
    //         date: '15.11.2020'
    //      },
    //      {
    //         id: 15,
    //         img: 'Photo (4).png',
    //         name: 'Краска Wallquest, Brownsone MS90102',
    //         price: 3400,
    //         rating: 12,
    //         qty: 1,
    //         date: '15.10.2020'
    //      },
    //   ],
      // cardsBasket: []
   },
   mutations: {
      // inBasket: (state, product) => {
      // state.productsBasket.push(product)
      // },
      // minusCount: (state) => {
      // state.productBasket.quantity--
      // },
   },
   actions: {
      // plusCount(context) {
      //     context.commit('plusCount')
      // },
      // minusCount(context) {
      //     context.commit('minusCount')
      // },
      // inBasket({commit}, product) {
      //     commit('inBasket', product)
      // }
   },
   getters: {
      // productsBasket(state) {
      //     return state.productsBasket
      // }
   },
} )

export default store