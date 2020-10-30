import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueSlickCarousel from './plugins/VueSlickCarousel.js'

Vue.config.productionTip = false

new Vue({
  VueSlickCarousel,
  router,
  render: h => h(App),
}).$mount('#app')
