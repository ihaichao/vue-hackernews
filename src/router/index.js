import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import { newsListView } from '../views/NewsListView'

export default new Router({
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{ path: '/:page(\\d+)?', name: 'top', component: newsListView('top') },
		{ path: '/new/:page(\\d+)?', name: 'new', component: newsListView('new') },
		{ path: '/show/:page(\\d+)?', name: 'show', component: newsListView('show') },
		{ path: '/ask/:page(\\d+)?', name: 'ask', component: newsListView('ask') },
		{ path: '/job/:page(\\d+)?', name: 'job', component: newsListView('job') }
	]
})
