import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faBolt, faTimes, faClipboard, faClipboardCheck, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlay, faBolt, faTimes, faClipboard, faClipboardCheck, faSearch, faFacebook, faInstagram, faGithub, faTwitter, faLinkedin, faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)
