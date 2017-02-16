import NewsList from '../components/NewsList.vue'

export function newsListView (type) {
  return {
    name: `${type}-stories-view`,
    preFetch (store) {
      return store.dispatch('FETCH_LIST_DATA', { type, page: 1 })
    },
    render (h) {
      return h(NewsList)
    }
  }
}
