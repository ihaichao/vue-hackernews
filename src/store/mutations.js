import Vue from 'vue'

export const SET_ACTIVE_TYPE = (state, { type }) => {
	state.activeType = type
}

export const SET_ITEMS = (state, { items }) => {
	// items.forEach(item => {
	//   if (item) {
	//     Vue.set(state.items, item.id, item)
	//   }
	// })
	state.items = items
}
