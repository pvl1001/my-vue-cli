<template>
   <div id="app">
      <Nav :cardsBasket="cardsBasket" @clickBasket="clickBasket"/>
      <VueSlickCarousel class="slider-home" v-bind="settings">
         <div v-for="item in 3" :key="item" class="slider-img">
            <div class="slider-img__text">
               <h1>Краски</h1>
               <span>
                  Идеально подходят для стен и других поверхностей. Найди свой
                  идеальный цвет!
               </span>
            </div>
         </div>
      </VueSlickCarousel>
      <div class="wrapper">
         <Filters
            @changeFilterNew="changeFilterNew"
            @changeFilterAvail="changeFilterAvail"
            @changeFilterContractual="changeFilterContractual"
            @changeFilterExclusive="changeFilterExclusive"
            @changeFilterSale="changeFilterSale"
         />

         <div class="items">
            <div class="items-row">
               <div class="items__quantity">
                  {{ cardsFilter.length }} товаров
               </div>
               <VSelect @isClickSelect="isClickSelect"/>
            </div>
            <div class="cards">
               <Card
                  v-for="card of cardsFilter"
                  :key="card.id"
                  :card="card"
                  @addBasket="addBasket"
               />
            </div>
         </div>
      </div>

      <footer></footer>

      <Basket
         :cardsBasket="cardsBasket"
         @closeBasket="clickBasket"
         :isClickBasket="isClickBasket"
         @deleteCard="deleteCard"
         @clearBasket="clearBasket"
      />
   </div>
</template>

<script>
import Nav from "@/components/Nav";
import Filters from "@/components/Filters";
import VSelect from "@/components/VSelect";
import Card from "@/components/Card";
import Basket from "@/components/Basket";

export default {
   name: "App",
   components: {
      Nav,
      Filters,
      VSelect,
      Card,
      Basket
   },
   data() {
      return {
         cardsFilter: [],
         cardsBasket: [],
         isClickBasket: false,
         settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
         },
         cards: [
            {
               id: 1,
               img: "Photo (1).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 6000,
               rating: 0,
               qty: 1,
               date: "10.10.2020",
               availability: true,
               contractual: false,
               exclusive: true
            },
            {
               id: 2,
               img: "Photo (1).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 4800,
               rating: 0,
               qty: 1,
               date: "10.06.2020",
               availability: true,
               contractual: true,
               exclusive: false
            },
            {
               id: 3,
               img: "Photo (2).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 5290,
               rating: 2,
               qty: 1,
               date: "01.10.2020",
               availability: true,
               contractual: false,
               exclusive: true
            },
            {
               id: 4,
               img: "Photo (3).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 2800,
               rating: 10,
               qty: 1,
               date: "10.10.2020",
               availability: true,
               contractual: false,
               exclusive: false
            },
            {
               id: 5,
               img: "Photo (4).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 3400,
               rating: 1,
               qty: 1,
               date: "10.10.2019",
               availability: true,
               contractual: false,
               exclusive: false
            },
            {
               id: 6,
               img: "Photo (1).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 6000,
               rating: 6,
               qty: 1,
               date: "10.10.2020",
               availability: true,
               contractual: true,
               exclusive: true
            },
            {
               id: 7,
               img: "Photo (1).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 4800,
               rating: 6,
               qty: 1,
               date: "01.03.2020",
               availability: true,
               contractual: false,
               exclusive: false
            },
            {
               id: 8,
               img: "Photo (2).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 5290,
               rating: 0,
               qty: 1,
               date: "11.06.2020",
               availability: false,
               contractual: false,
               exclusive: false
            },
            {
               id: 9,
               img: "Photo (3).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 2800,
               rating: 10,
               qty: 1,
               date: "10.01.2020",
               availability: true,
               contractual: false,
               exclusive: false
            },
            {
               id: 10,
               img: "Photo (4).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 3400,
               rating: 9,
               qty: 1,
               date: "10.05.2019",
               availability: false,
               contractual: false,
               exclusive: false
            },
            {
               id: 11,
               img: "Photo (1).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 6000,
               rating: 8,
               qty: 1,
               date: "12.11.2018",
               availability: true,
               contractual: false,
               exclusive: true
            },
            {
               id: 12,
               img: "Photo (1).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 4800,
               rating: 3,
               qty: 1,
               date: "20.12.2019",
               availability: true,
               contractual: false,
               exclusive: false
            },
            {
               id: 13,
               img: "Photo (2).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 5290,
               rating: 0,
               qty: 1,
               date: "13.12.2020",
               availability: false,
               contractual: false,
               exclusive: true
            },
            {
               id: 14,
               img: "Photo (3).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 2800,
               rating: 2,
               qty: 1,
               date: "15.11.2020",
               availability: true,
               contractual: false,
               exclusive: false
            },
            {
               id: 15,
               img: "Photo (4).png",
               name: "Краска Wallquest, Brownsone MS90102",
               price: 3400,
               rating: 12,
               qty: 1,
               date: "15.10.2020",
               availability: true,
               contractual: false,
               exclusive: false
            },
         ],
         new: false,
         avail: false,
         contractual: false,
         exclusive: false,
         sale: false
      };
   },
   computed: {},
   methods: {
      clearBasket() {
         this.cardsBasket = []
      },
      deleteCard(index) {
         this.cardsBasket.splice( index, 1 )
      },
      clickBasket() {
         this.isClickBasket = !this.isClickBasket;
      },
      addBasket(card) {
         if (this.cardsBasket.length) {
            let empty = true
            this.cardsBasket.map( el => {
               if (el.id === card.id) {
                  empty = false
                  el.qty++
               } else if (empty) {
                  this.cardsBasket.push( card )
               }
            } )

         } else {
            this.cardsBasket.push( card )
         }

      },
      isClickSelect(selectId) {  // сортировка
         if (selectId === "option-1") {
            this.cardsFilter.sort( function (a, b) {
               return parseFloat( b.price ) - parseFloat( a.price );
            } );
         }
         if (selectId === "option-2") {
            this.cardsFilter.sort( function (a, b) {
               return parseFloat( a.price ) - parseFloat( b.price );
            } );
         }
         if (selectId === "option-3") {
            this.cardsFilter.sort( function (a, b) {
               return parseFloat( b.rating ) - parseFloat( a.rating );
            } );
         }
         if (selectId === "option-4") {
            let form = (x) => x.split( "." ).reverse().join( "" );
            this.cardsFilter.sort( function (a, b) {
               return parseFloat( form( b.date ) ) - form( a.date );
            } );
         }
      },
      changeFilterNew(status) {  // фильтр новинки
         this.new = status
         if (status) {
            let form = (x) => Number( x.split( "." ).reverse().join( "" ) )
            this.cardsFilter = this.cardsFilter.filter(
               (card) => form( card.date ) < 20201001
            )
         } else if (!status) {
            this.cardsFilter = this.cards
            if (this.avail) this.changeFilterAvail( this.avail )
            if (this.contractual) this.changeFilterContractual( this.contractual )
            if (this.exclusive) this.changeFilterExclusive( this.exclusive )
            if (this.sale) this.changeFilterSale( this.sale )
         } else this.cardsFilter = []
      },
      changeFilterAvail(status) { // фильтр наличие
         this.avail = status
         if (status) {
            this.cardsFilter = this.cardsFilter.filter( card => card.availability )
         } else if (!status) {
            this.cardsFilter = this.cards
            if (this.new) this.changeFilterNew( this.new )
            if (this.contractual) this.changeFilterContractual( this.contractual )
            if (this.exclusive) this.changeFilterExclusive( this.exclusive )
            if (this.sale) this.changeFilterSale( this.sale )
         } else this.cardsFilter = []
      },
      changeFilterContractual(status) { // фильтр контрактные
         this.contractual = status
         if (status) {
            this.cardsFilter = this.cardsFilter.filter( card => card.contractual )
         } else if (!status) {
            this.cardsFilter = this.cards
            if (this.new) this.changeFilterNew( this.new )
            if (this.avail) this.changeFilterAvail( this.avail )
            if (this.exclusive) this.changeFilterExclusive( this.exclusive )
            if (this.sale) this.changeFilterSale( this.sale )
         } else this.cardsFilter = []
      },
      changeFilterExclusive(status) { // фильтр эксклюзив
         this.exclusive = status
         if (status) {
            this.cardsFilter = this.cardsFilter.filter( card => card.exclusive )
         } else if (!status) {
            this.cardsFilter = this.cards
            if (this.new) this.changeFilterNew( this.new )
            if (this.avail) this.changeFilterAvail( this.avail )
            if (this.contractual) this.changeFilterContractual( this.contractual )
            if (this.sale) this.changeFilterSale( this.sale )
         } else this.cardsFilter = []
      },
      changeFilterSale(status) { // фильтр распродажа
         this.sale = status
         if (status) {
            this.cardsFilter = this.cardsFilter.filter( card => card.price < 3000 )
         } else if (!status) {
            this.cardsFilter = this.cards
            if (this.new) this.changeFilterNew( this.new )
            if (this.avail) this.changeFilterAvail( this.avail )
            if (this.contractual) this.changeFilterContractual( this.contractual )
            if (this.exclusive) this.changeFilterExclusive( this.exclusive )
         } else this.cardsFilter = []
      }
   },
   created() {
      this.cardsFilter = this.cards;
   },
   mounted() {
      fetch( "https://jsonplaceholder.typicode.com/todos?_limit=3" )
         .then( (response) => response.json() )
         .then( (json) => (this.todos = json) );
   },
};
</script>

<style lang="scss">
//@import '~bootstrap';
//@import '~bootstrap-vue';
@import "./assets/font/stylesheet.css";

html,
body {
   font-family: Inter, sans-serif;
   color: #1f2020;
}

ul {
   list-style-type: none;
}

a {
   text-decoration: none;
   color: inherit;
   transition: 0.3s;
   border-bottom: 1px solid transparent;
}

ul {
   padding: 0;
   margin: 0;
}

body {
   margin: 0;
}

button {
   cursor: pointer;
}

.wrapper {
   margin: 0 auto;
   max-width: 1920px;
   padding: 0 64px;
   display: flex;
   //justify-content: center;
}

#app {
   h1.title-layout {
      padding: 100px 0;
      color: #ccc;
      background: url("./assets/img/Frame 37.png") center / cover no-repeat;
      font-size: 4rem;
      margin: 0;
   }

   hr {
      margin: 0;
   }
}

@media (max-width: 767px) {
   .wrapper {
      padding: 0 20px;
   }
}
</style>

<style lang="scss">
.slick-slider {
   text-align: center;

   .slick-slide {
      position: relative;
      height: 560px !important;
      overflow: hidden;
      width: 100%;
   }

   .slick-slide img {
      height: 100% !important;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }

   .slick-arrow {
      border-radius: 50%;
      z-index: 1;
      width: 28px;
      height: 51px;
      background: url("./assets/svg/slide-arrow.svg") center / contain no-repeat;

      &:before {
         display: none;
      }
   }

   .slick-prev:hover,
   .slick-prev:focus,
   .slick-next:hover,
   .slick-next:focus {
      background: url("./assets/svg/slide-arrow.svg") center / contain no-repeat !important;
   }

   .slick-arrow.slick-prev {
      transform: rotateY(180deg);
      left: 21.7%;
      top: 62.5%;
   }

   .slick-arrow.slick-next {
      transform: rotateY(0deg);
      right: 21.7%;
      top: 62.5%;
   }

   .slick-dots {
      display: inline-block !important;
      width: auto;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 16px;
      bottom: auto;
      margin-top: -70px;
      transform: translateX(-50%);
      height: 32px;
      padding: 0 20px;
      margin-left: 7px;

      * {
         width: auto;
      }

      li button {
         height: 32px;
         padding: 2px;

         &:before {
            line-height: 35px;
            width: auto;
            font-size: 7px;
            color: #ffffff;
            opacity: 0.2;
         }
      }

      li.slick-active button:before {
         color: #fff;
         opacity: 1;
      }
   }
}

.slider-img {
   width: 100%;
   min-height: 560px;
   background: url("./assets/img/Rectangle 645.png") center / cover no-repeat;
   display: flex !important;
   align-items: center;
   justify-content: center;
   color: #ffffff;

   &__text {
      width: 472px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 0 5px;
      box-sizing: border-box;

      h1 {
         font-size: 72px;
         line-height: 88%;
         letter-spacing: -0.02em;
         margin: 0 0 24px;
         font-style: normal;
         font-weight: normal;
      }

      span {
         font-weight: 500;
         font-size: 16px;
         line-height: 130%;
         letter-spacing: 0.02em;
      }
   }
}

.slider-home {
   margin-bottom: 72px;
}

.Filters {
   margin-right: 138px;
}

.items {
   width: 100%;
   padding-bottom: 147px;

   .items-row {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 44px;
   }
}

.cards {
   display: flex;
   flex-wrap: wrap;
}

.btn {
   background: #7bb899;
   border-radius: 8px;
   cursor: pointer;
}

footer {
   height: 313px;
   background-color: #000;
}
</style>
