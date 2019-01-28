import Vue from 'vue'
import Asyncy from '@/Asyncy'
import router from '@/router'
import '@/plugins'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Asyncy)
}).$mount('#asyncy')
