<template>
   <div class="Basket" :class="{ open: isClickBasket }">
      <div class="Basket__list">
         <div class="Basket__head">
            <div class="Basket__title">
               <h2>Корзина</h2>
               <div @click="closeBasket" class="Basket__title_btn-close"></div>
            </div>
            <div class="Basket__number">
               <div>{{ cardsBasket.length }} товара</div>
               <div @click="clearBasket">Очистить список</div>
            </div>
         </div>

         <div class="Basket__card-basket-wrapper">
            <CardBasket
               v-for="(card, index) of cardsBasket"
               :card="card"
               :key="index"
               @deleteCard="deleteCard(index)"
               @qtyPlus="qtyPlus"
            />
         </div>

         <div class="Basket__total">
            <div class="Basket__total_total">
               <div>Итого</div>
               <div>{{ totalPrice }}₽</div>
            </div>
            <button>Оформить заказ</button>
         </div>
      </div>
   </div>
</template>

<script>
import CardBasket from "@/components/CardBasket";

export default {
   name: "Basket",
   props: ["isClickBasket", "cardsBasket"],
   components: {
      CardBasket
   },

   data() {
      return {
         total: 0,
         count: 0
      }
   },
   computed: {
      totalPrice() {
         return this.cardsBasket.reduce( (total, el) => {
            return total + el.priceTotal
         }, 0 )
      }
   },
   methods: {
      qtyPlus(count) {
         this.$emit('qtyPlus', count)
      },
      clearBasket() {
         this.$emit( 'clearBasket' )
      },
      closeBasket() {
         this.$emit( "closeBasket" );
         document.body.classList.remove('no-scroll')

      },
      deleteCard(index) {
         this.$emit( 'deleteCard', index )
      },
   },
   mounted() {
      const basketOpen = document.querySelector( ".Basket" );
      window.onclick = (e) => {
         if (e.target === basketOpen) this.closeBasket();
      };
   },
};
</script>

<style scoped lang="scss">
.Basket {
   position: fixed;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.7);
   z-index: 1;
   visibility: hidden;
   opacity: 0;
   transition: 0.3s;

   &__head {
      position: sticky;
      top: 0;
      background-color: #fff;
      z-index: 1;
      padding-top: 40px;
   }

   &__list {
      position: absolute;
      right: -600px;
      top: 0;
      background-color: #fff;
      width: 600px;
      height: 100%;
      padding: 0 40px;
      transition: 0.3s;
      box-sizing: border-box;
      overflow: auto;
      display: flex;
      flex-direction: column;
   }

   &__title {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 94px;

      h2 {
         font-weight: 500;
         font-size: 30px;
         line-height: 88%;
         letter-spacing: -0.04em;
         margin: 0;
      }

      &_btn-close {
         height: 48px;
         width: 48px;
         border: 1px solid rgba(0, 0, 0, 0.1);
         border-radius: 50%;
         background: url("../assets/svg/x.svg") center / 50% no-repeat;
         position: absolute;
         right: 0;
         cursor: pointer;
      }
   }

   &__number {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding-bottom: 10px;

      div:last-child {
         font-weight: 300;
         font-size: 14px;
         cursor: pointer;
      }
   }

   &__card-basket-wrapper {
      flex-grow: 1;
      margin-bottom: 40px;
   }

   &__total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0 40px;
      position: sticky;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;

      &_total {
         div:first-child {
            font-size: 16px;
            line-height: 100%;
            margin-bottom: 6px;
         }

         div:last-child {
            font-weight: 500;
            font-size: 30px;
            line-height: 100%;
            letter-spacing: -0.02em;
         }
      }

      button {
         width: 240px;
         height: 56px;
         font-weight: 500;
         font-size: 12px;
         letter-spacing: 0.06em;
         text-transform: uppercase;
      }
   }
}

.Basket.open {
   visibility: visible;
   opacity: 1;
   z-index: 2;

   .Basket__list {
      right: 0;
   }
}

@media (max-width: 767px) {
   .Basket {

      &__head {
         padding: 20px 0;
      }

      &__card-basket-wrapper {
         margin-bottom: 0;
      }

      &__title {
         margin-bottom: 40px;
      }

      &__list {
         padding: 0 20px;
         width: 100%;
      }

      &__item_name {
         font-size: 14px;
      }

      &__total {
         position: sticky;
         left: 0;
         right: 0;
         bottom: 0;
         padding: 20px 0;
         background-color: #fff;

         button {
            width: 150px;
            height: 50px;
         }

         &_total div:last-child {
            font-size: 25px ;
         }
      }
   }
}
</style>
