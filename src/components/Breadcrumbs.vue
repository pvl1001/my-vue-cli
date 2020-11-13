<template>
   <div class="Breadcrumbs">
      <ul>
         <li>
            <router-link to="/">Главная</router-link>
         </li>
         <li>
            <router-link to="/">Продукты</router-link>
         </li>
         <li>
            <router-link to="/">Краски</router-link>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
name: "Breadcrumbs"
}
</script>

<style scoped lang="scss">
   .Breadcrumbs {
      position: absolute;
      top: 130px;
      left: 62px;
      z-index: 2;

      ul {
         display: flex;

         li:not(:last-child) {
            margin-right: 20px;
            position: relative;
            &:before {
               content: '.';
               position: absolute;
               right: -13px;
               font-size: 30px;
               line-height: 7px;
               color: #FFFFFF;
               opacity: 0.3;
            }
         }

         a {
            font-size: 10px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: #FFFFFF;
            opacity: 0.3;
         }
      }
   }

   @media (max-width: 1300px) {

      .Breadcrumbs {
         position: relative;
         top: auto;
         left: auto;
         padding: 0 24px;

         ul {
            a, li:before {
            color: #1F2020 !important;
            }
         }
      }
   }
</style>