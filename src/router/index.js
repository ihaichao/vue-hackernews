import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import NewsList from '../components/NewsList.vue'

export default new Router({
	mode: 'history',
	routes: [
		{path: '/', component: NewsList}
	]
})
