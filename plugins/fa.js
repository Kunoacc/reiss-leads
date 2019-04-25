import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faBell, faComments, faSearch, faSortUp, faSortDown, faSearchPlus, faEdit, faTrash, faSort, faChevronDown, faChevronUp, faTimes, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faMoon, faSun, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faComments, faBell, faSearch, faSortDown, faSortUp, faSearchPlus, faEdit, faTrash ,faSort, faChevronDown, faChevronUp, faTimes,
    faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faMoon, faSun, faCalendar)

Vue.component('fa', FontAwesomeIcon)