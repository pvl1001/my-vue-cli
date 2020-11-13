<template>
   <div class="Card">
      <div class="Card-wrapper">
         <div class="Card__img">
            <img :src="require('../assets/img/' + card.img)" alt="image"/>
            <img class="img-hover" src="../assets/img/Border.png" alt="image"/>
         </div>
         <div class="Card__name">{{ card.name }}</div>
         <div class="Card__price">
            <div>{{ card.price }} ₽</div>
            <div @click="addBasket" class="btn plus"></div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Card",
   props: ["card"],

   methods: {
      addBasket() {
         this.$emit( "addBasket", this.card );
      },
   },
};
</script>

<style scoped lang="scss">
.Card {
   width: 20%;
   margin-bottom: 16px;
   box-sizing: border-box;
   padding: 0 12px;
   position: relative;

   .Card-wrapper {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
   }

   &:last-child:before {
      content: "";
      height: 2px;
      position: absolute;
      width: calc(500% + 24 * 4px);
      right: 0;
      bottom: 0;
      background-color: #fff;
      z-index: 1;
   }

   &:hover {
      .img-hover {
         visibility: visible;
         opacity: 1;
      }

      .btn.plus {
         visibility: visible;
         opacity: 1;
      }
   }

   &__img {
      padding: 15%;
      margin: 0 auto 10px;
      text-align: center;

      img {
         max-width: 100%;
         max-height: 100%;
         display: inline-block;
         transition: opacity 0.2s;
      }

      .img-hover {
         visibility: hidden;
         opacity: 0;
         position: absolute;
         top: 0;
         left: 0;
         max-width: 100%;
         max-height: 100%;
         transition: 0.3s;
      }
   }

   .btn {
      width: 80px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   &__name {
      font-weight: 300;
      font-size: 16px;
      line-height: 112%;
      letter-spacing: 0.02em;
      margin-bottom: 16px;
      flex-grow: 1;
   }

   &__price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;

      div:first-child {
         font-weight: 600;
      }

      .btn.plus {
         background: #7bb899 url("../assets/svg/plus.svg") center / 20px no-repeat;
         visibility: hidden;
         opacity: 0;
         transition: 0.2s;
      }
   }
}

@media (max-width: 1300px) {
   .Card {
      width: 25%;
      padding: 0 7px;
   }

   .Card__price .btn.plus {
      background: #F2F2F2 url("../assets/svg/plus.svg") center / 16px no-repeat;
      visibility: visible;
      opacity: 1 !important;
      width: 40px;
      height: 24px;
   }

}

@media (max-width: 767px) {
   .Card {
      width: 50%;
   }
}
</style>
