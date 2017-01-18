import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
	activeType: null,
	itemsPerPage: 20,
	items: {/* [id: number]: Item */},
	lists: {
	  new: [],
	  comments: [],
	  show: [],
	  ask: [],
	  jobs: []
	}
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
