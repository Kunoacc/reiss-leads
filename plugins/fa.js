import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faBell, faComments, faSearch, faSortUp, faSortDown, faSearchPlus, faEdit, faTrash, faSort, faChevronDown, faChevronUp, faTimes, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faComments, faBell, faSearch, faSortDown, faSortUp, faSearchPlus, faEdit, faTrash ,faSort, faChevronDown, faChevronUp, faTimes,
    faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight)

Vue.component('fa', FontAwesomeIcon)