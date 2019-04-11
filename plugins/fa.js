import Vue from "vue"
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faEnvelope, faKey, faHome, faHeart, faBook, faMapMarker, faBell, faUsers, faSync, faEllipsisV, faTrash, faPen, faPlus, faInfo, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(faSpinner, faEnvelope, faKey, faHome, faHeart, faBook, faMapMarker, faBell, faUsers, faSync, faEllipsisV, faTrash, faPen, faPlus, faInfo, faBuilding)

Vue.component('fa', FontAwesomeIcon)