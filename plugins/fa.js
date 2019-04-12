import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faBell, faComments, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faComments, faBell, faSearch)

Vue.component('fa', FontAwesomeIcon)