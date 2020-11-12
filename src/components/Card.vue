<template>
   <div class="Card">
      <div class="Card-wrapper">
         <div class="Card__img">
            <img :src="require('../assets/img/' + card.img)" alt="image"/>
            <img class="img-hover" src="../assets/img/Border.png" alt="image"/>
         </div>
         <div class="Card__name">{{ card.name }} <br> {{ card.date }}</div>
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
}
</script>

<style scoped lang="scss">
.Card {
   width: 20%;
   margin-bottom: 16px;
   box-sizing: border-box;
   padding: 0 12px;

   .Card-wrapper {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
      position: relative;
   }

   //&:nth-last-child(-n + 5) {
   //   border: 0;
   //}

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
      //padding: 40px;
      margin: 0 auto 10px;

      img {
         width: 100%;
         max-width: 200px;
         max-height: 200px;
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
</style>
