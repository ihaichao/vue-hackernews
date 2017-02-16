import { fetchIdsByType, fetchItems } from './api'

const FETCH_LIST_DATA = ({ commit, dispatch, state }, { type, page }) => {
	console.log(2)
	return fetchIdsByType(type)
		.then(ids => commit('SET_LIST', { type, ids }))
		.then(() => commit('SET_ACTIVE_TYPE', { type }))
		.then(() => dispatch('FETCH_ITEMS_BY_PAGE', {ids: state.lists[type], page: page}))
}

const FETCH_ITEMS_BY_PAGE = ({ commit, state }, { ids, page }) => {
	const itemsPerPage = state.itemsPerPage
	const start = (page - 1) * itemsPerPage
	const end = page * itemsPerPage
	ids = ids.slice(start, end)
	console.log(ids.length)
	if (ids.length) {
		return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
	} else {
		return Promise.resolve()
	}
}

export {
	FETCH_LIST_DATA,
	FETCH_ITEMS_BY_PAGE
}
