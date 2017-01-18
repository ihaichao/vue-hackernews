// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import store from './store'
import { domain, fromNow, pluralize } from './filters'

/* eslint-disable no-new */

Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)
Vue.filter('pluralize', pluralize)

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
