import Vue from 'vue'
import Storyscript from '@/Storyscript'
import router from '@/router'
import '@/plugins'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Storyscript)
}).$mount('#storyscript')
