import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import App from './components/App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import { domain, fromNow, pluralize } from './filters'

/* eslint-disable no-new */

sync(store, router)

const options = {
  color: '#f60',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)
Vue.filter('pluralize', pluralize)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
