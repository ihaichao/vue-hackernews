import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
	activeType: null,
	itemsPerPage: 30,
	items: [],
	lists: {
		top: [],
	  new: [],
	  show: [],
	  ask: [],
	  job: []
	}
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
