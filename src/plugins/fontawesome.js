import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faBolt, faTimes, faClipboard, faClipboardCheck, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlay, faBolt, faTimes, faClipboard, faClipboardCheck, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
