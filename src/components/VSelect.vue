<template>
   <div
      class="Select items__sorting"
      @click="clickSelect = true"
   >
      {{ select }}
      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M4 4.5L7.4641 0L0.535898 0L4 4.5Z" fill="#202020"/>
      </svg>

      <div class="select-modal" :class="{'open': clickSelect}">
         <div class="select-modal__option">
            <input
               id="option-1"
               type="radio"
               name="sort"
               value="Сначала дорогие"
               @click="isClickSelect"
               v-model="select"
            >
            <label for="option-1">Сначала дорогие</label>
         </div>
         <div class="select-modal__option">
            <input
               id="option-2"
               type="radio"
               name="sort"
               value="Сначала недорогие"
               @click="isClickSelect"
               v-model="select"
            >
            <label for="option-2">Сначала недорогие</label>
         </div>
         <div class="select-modal__option">
            <input
               id="option-3"
               type="radio"
               name="sort"
               value="Сначала популярные"
               @click="isClickSelect"
               v-model="select"
            >
            <label for="option-3">Сначала популярные</label>
         </div>
         <div class="select-modal__option">
            <input
               id="option-4"
               type="radio"
               name="sort"
               value="Сначала новые"
               @click="isClickSelect"
               v-model="select"
            >
            <label for="option-4">Сначала новые</label>
         </div>

         <div
            class="select-modal__close"
            @click="isClickSelect">
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Select",

   data() {
      return {
         select: 'Сначала дорогие',
         clickSelect: false
      }
   },
   methods: {
      isClickSelect(e) {
         e.stopPropagation()
         this.clickSelect = false
         this.$emit( 'isClickSelect', e.target.id )
      },

   }
}
</script>

<style scoped lang="scss">

.items__sorting {
   display: flex;
   align-items: center;
   cursor: pointer;
   position: relative;

   svg {
      margin-left: 5px;
   }
}

.select-modal {
   position: absolute;
   right: 0;
   top: 0;
   visibility: hidden;
   opacity: 0;

   .select-modal__option {
      width: 280px;
      z-index: 2;
      position: relative;
      background-color: #fff;

      input {
         display: none;
      }

      label {
         height: 48px;
         padding-left: 24px;
         display: flex;
         align-items: center;
         cursor: pointer;

         &:hover {
            background-color: #7BB899;
         }
      }

   }

   .select-modal__close {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: rgba(0, 0, 0, .7);
      z-index: 1;
      cursor: initial;
   }
}

.select-modal.open {
   visibility: visible;
   opacity: 1;
   z-index: 2;
}
</style>