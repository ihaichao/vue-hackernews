import { fetchIdsByType, fetchItems } from './api'

export const FETCH_LIST_DATA = ({ commit, dispatch, state }, type) => {
	commit('SET_ACTIVE_TYPE', type)
	return fetchIdsByType(type).then(ids => dispatch('FETCH_ITEMS', {ids: ids}))
}

export const FETCH_ITEMS = ({ commit }, { ids }) => {
	if (ids.length) {
	  return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
	} else {
	  return Promise.resolve()
	}
}
