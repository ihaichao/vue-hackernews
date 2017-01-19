const SET_ACTIVE_TYPE = (state, { type }) => {
	state.activeType = type
}

const SET_ITEMS = (state, { items }) => {
	state.items = items
}

const SET_LIST = (state, { type, ids }) => {
	state.lists[type] = ids
}

export {
	SET_ACTIVE_TYPE,
	SET_ITEMS,
	SET_LIST
}
