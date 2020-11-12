<template>
   <div @click.self="closeFilterMobile" class="Filters__mobile-bg">
      <div class="Filters">
         <span @click="closeFilterMobile" class="Filters__mobile-line"></span>
         <div class="filter">
            <input id="new" type="checkbox" @input="changeFilterNew" />
            <label for="new" class="switch">
               <span class="round"></span>
            </label>
            <label for="new">
               <div class="filter__name">Новинки</div>
            </label>
         </div>

         <div class="filter">
            <input
               id="availability "
               type="checkbox"
               @input="changeFilterAvail"
            />
            <label for="availability " class="switch">
               <span class="round"></span>
            </label>
            <label for="availability ">
               <div class="filter__name">Есть в наличии</div>
            </label>
         </div>

         <div class="filter">
            <input
               id="Contractual"
               type="checkbox"
               @input="changeFilterContractual"
            />
            <label for="Contractual" class="switch">
               <span class="round"></span>
            </label>
            <label for="Contractual">
               <div class="filter__name">Контрактные</div>
            </label>
         </div>

         <div class="filter">
            <input
               id="Exclusive"
               type="checkbox"
               @input="changeFilterExclusive"
            />
            <label for="Exclusive" class="switch">
               <span class="round"></span>
            </label>
            <label for="Exclusive">
               <div class="filter__name">Эксклюзивные</div>
            </label>
         </div>

         <div class="filter">
            <input id="sale" type="checkbox" @input="changeFilterSale" />
            <label for="sale" class="switch">
               <span class="round"></span>
            </label>
            <label for="sale">
               <div class="filter__name">Распродажа</div>
            </label>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Filters",

   data() {
      return {};
   },
   computed: {},
   methods: {
      closeFilterMobile() {
         this.$emit("closeFilterMobile");
      },
      changeFilterNew(e) {
         this.$emit("changeFilterNew", e.target.checked);
      },
      changeFilterAvail(e) {
         this.$emit("changeFilterAvail", e.target.checked);
      },
      changeFilterContractual(e) {
         this.$emit("changeFilterContractual", e.target.checked);
      },
      changeFilterExclusive(e) {
         this.$emit("changeFilterExclusive", e.target.checked);
      },
      changeFilterSale(e) {
         this.$emit("changeFilterSale", e.target.checked);
      },
   },
};
</script>

<style scoped lang="scss">
.Filters {
   flex-shrink: 0;
}

input[type="checkbox"] {
   display: none;
}

input:checked + label span {
   background-color: #7bb899;
}

input:checked + label span:before {
   transform: translateX(15px);
}

label {
   cursor: pointer;
}

.switch {
   position: relative;
   display: inline-block;
   width: 36px;
   height: 22px;
   margin-right: 12px;

   input {
      display: none;
   }

   span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f2f2f2;
      transition: 0.4s;
   }

   span:before {
      position: absolute;
      content: "";
      height: 8px;
      width: 8px;
      left: 7px;
      bottom: calc(50% - 4px);
      background-color: #1f2020;
      transition: 0.5s;
   }

   input:checked + span {
      background-color: #19181f;
   }

   input:focus + span {
      box-shadow: 0 0 1px #19181f;
   }

   input:checked + span:before {
      -webkit-transform: translateX(19px);
      -ms-transform: translateX(19px);
      transform: translateX(19px);
      background-color: #6e4aff;
   }

   /* Rounded sliders */
   span.round {
      border-radius: 34px;
   }

   span.round:before {
      border-radius: 50%;
   }
}

.filter {
   display: flex;
   align-items: center;
   margin-bottom: 10px;

   &:last-child {
      margin-bottom: 0;
   }

   &__name {
      font-size: 12px;
      line-height: 100%;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      white-space: nowrap;
   }
}

@media (max-width: 1300px) {
   .Filters__mobile-bg {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.7);
      visibility: hidden;
      opacity: 0;
   }

   .Filters {
      position: fixed;
      left: 0;
      right: 0;
      bottom: -100%;
      background: #fff;
      z-index: 1;
      margin: 0;
      padding: 54px 24px;
      border-radius: 24px 24px 0px 0px;
      transition: 0.3s;

      &__mobile-line {
         position: absolute;
         width: 28px;
         height: 4px;
         top: 12px;
         left: calc(50% - 14px);
         background: #1f2020;
         opacity: 0.6;
         border-radius: 40px;
      }
   }

   .Filters__mobile-bg.open {
      visibility: visible;
      opacity: 1;

      .Filters {
         bottom: 0;
      }
   }
}
</style>
