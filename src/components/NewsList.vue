<template>
  <div class="news-view" :class="{ loading: !items.length }">
    <item
      v-for="item in items"
      :item="item"
      :index="item.index">
    </item>
    <div class="pagination" v-show="items.length > 0">
      <router-link v-if="page > 1" :to="path + (page - 1)">&lt; prev</router-link>
      <router-link v-if="hasMore" :to="path + (page + 1)">more...</router-link>
    </div>
  </div>
</template>

<script>
import store from '../store'
import Item from './Item.vue'

let isInitialRender = true

export default {

  name: 'NewsView',

  components: {
    Item
  },

  data () {
    const data = {
      items: isInitialRender ? this.$store.getters.activeItems : []
    }
    isInitialRender = false
    return data
  },

  created () {
    if (this.$root._isMounted) {
      this.fetchItems()
    }
  },

  watch: {
    '$route': function () {
      this.fetchItems()
    }
  },

  methods: {
    fetchItems () {
      this.$Progress.start()
      this.$store.dispatch('FETCH_LIST_DATA', {
        type: this.type,
        page: this.page
      }).then(() => {
        this.$Progress.finish()
        this.items = this.$store.getters.activeItems
      }, () => {
        this.$Progress.fail()
      })
    }
  },

  computed: {
    page () {
      return Number(this.$store.state.route.params.page) || 1
    },
    type () {
      return this.$store.state.route.name
    },
    path () {
      return this.$store.state.route.name === 'top' ? '/' : `/${this.$store.state.route.name}/`
    },
    maxPage () {
      const { itemsPerPage, lists } = this.$store.state
      return Math.ceil(lists[this.type].length / itemsPerPage)
    },
    hasMore () {
      return this.page < this.maxPage
    }
  }
}
</script>

<style lang="stylus">
.news-view
  padding-left 5px
  padding-right 15px
  &.loading:before
    content "Loading..."
    position absolute
    bottom -10px
    left 50%
    transform translateX(-50%)
  .pagination
    padding 10px 10px 10px 40px
    margin-top 10px
    border-top 2px solid #f60
    a
      margin-right 10px
      &:hover
        text-decoration underline
</style>
