import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import NewsList from '../components/NewsList.vue'

export default new Router({
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{ path: '/:page(\\d+)?', name: 'top', component: NewsList },
		{ path: '/new/:page(\\d+)?', name: 'new', component: NewsList },
		{ path: '/show/:page(\\d+)?', name: 'show', component: NewsList },
		{ path: '/ask/:page(\\d+)?', name: 'ask', component: NewsList },
		{ path: '/job/:page(\\d+)?', name: 'job', component: NewsList }
	]
})
