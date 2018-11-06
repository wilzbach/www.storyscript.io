import 'prismjs'
import 'prismjs/components/prism-coffeescript'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Vue from 'vue'
import vPrism from 'vue-prism-component'

Vue.component('prism', vPrism)
