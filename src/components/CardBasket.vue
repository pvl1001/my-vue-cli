<template>
   <div class="Basket__item">
      <router-link to="#">
         <img :src="require('../assets/img/' + card.img)" alt="image"/>
         <div>
            <div class="Basket__item_name">{{ card.name }}</div>
            <div class="Basket__item_price">{{ card.price }} ₽</div>
         </div>
      </router-link>
      <div @click="qtyRemove" class="Basket__counter_btn minus"></div>
      <div class="Basket__counter_count">{{ card.qty }}</div>
      <div @click="qtyPlus" class="Basket__counter_btn plus"></div>
      <div @click="deleteCard" class="Basket__counter_delete"></div>
   </div>
</template>

<script>
export default {
   name: "CardBasket",
   props: ['card'],
   data() {
      return {}
   },

   methods: {
      qtyPlus() {
         this.card.qty++
         this.card.priceTotal = this.card.price * this.card.qty
         this.$emit('qtyPlus', this.priceCounter)
      },
      qtyRemove() {
         if (this.card.qty > 1) this.card.qty--
         this.card.priceTotal = this.card.price * this.card.qty
      },
      deleteCard() {
         this.$emit('deleteCard')
      },
   }
}
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

   &__list {
      position: absolute;
      right: -600px;
      top: 0;
      background-color: #fff;
      width: 600px;
      height: 100%;
      padding: 40px;
      transition: 0.3s;
      box-sizing: border-box;
      overflow: auto;
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

   &__item {
      display: flex;
      align-items: center;
      height: 96px;
      padding: 12px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      &_price {
         font-weight: 600;
         font-size: 16px;
         line-height: 100%;
      }

      &:last-child {
         border-bottom: 0;
      }

      a {
         display: flex;
         align-items: center;
      }

      img {
         max-width: 96px;
         max-height: 96px;
         margin-right: 8px;
      }

      img + div {
         margin-right: 62px;
      }

      &_name {
         font-weight: 300;
         font-size: 16px;
         line-height: 112%;
         letter-spacing: 0.02em;
         margin-bottom: 16px;
      }

      &__price {
         font-weight: 600;
      }

      .Basket__counter_btn.minus {
         margin-left: auto;
      }

      .Basket__counter_btn {
         width: 40px;
         height: 24px;
         border-radius: 4px;
         cursor: pointer;
         flex-shrink: 0;
      }

      .Basket__counter_btn.minus {
         background: #f2f2f2 url("../assets/svg/minus.svg") center / 10px no-repeat;
      }

      .Basket__counter_btn.plus {
         background: #f2f2f2 url("../assets/svg/plus.svg") center / 15px no-repeat;
      }

      .Basket__counter_count {
         min-width: 48px;
         text-align: center;
      }

      .Basket__counter_delete {
         width: 24px;
         height: 24px;
         margin-left: 43px;
         background: url("../assets/svg/x.svg") center / contain no-repeat;
         opacity: 0.2;
         cursor: pointer;
         flex-shrink: 0;
      }
   }
}

.Basket.open {
   visibility: visible;
   opacity: 1;

   .Basket__list {
      right: 0;
   }
}

@media (max-width: 767px) {
   .Basket {

      &__item {
         height: auto !important;
         flex-wrap: wrap;
         position: relative;

         img + div {
            margin-right: 35px;
         }

         a {
            width: 100%;
            margin-bottom: 16px;
         }
      }

      &__counter_delete {
         position: absolute;
         top: 25px;
         right: 0;
      }
   }
}
</style>
