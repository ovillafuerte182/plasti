import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from 'vee-validate'
import es from 'vee-validate/dist/locale/es.json'
import * as rules from 'vee-validate/dist/rules'

import VueCompositionAPI from '@vue/composition-api'

import VueSweetalert2 from 'vue-sweetalert2'
import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'sweetalert2/dist/sweetalert2.min.css'

// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

localize('es', es)

// Install VeeValidate components globally
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

Vue.use(VueSweetalert2)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

Vue.filter('capitalize', value => {
  if (!value) return ''

  return value
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
