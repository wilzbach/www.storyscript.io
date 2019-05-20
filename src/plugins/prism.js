import 'prismjs'
import 'prismjs/components/prism-coffeescript'
import './prism-story'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Vue from 'vue'
import vPrism from 'vue-prism-component'

Vue.component('prism', vPrism)
