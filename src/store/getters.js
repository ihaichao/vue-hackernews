const activeItems = state => {
  let page = state.route.params.page || 1
	state.items.forEach((item, index) => {
		item.index = (page - 1) * state.itemsPerPage + index + 1
	})
  return state.items
}

export {
  activeItems
}
