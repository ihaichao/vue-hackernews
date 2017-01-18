<template>
  <div class="news-view" :class="{ loading: !items.length }">
    <!-- item list -->
    <item
      v-for="(item, index) in items"
      :item="item"
      :index="index + 1">
    </item>
    <!-- navigation -->
    <div class="nav" v-show="items.length > 0">
      <a v-if="page > 1" :href="'#/news/' + (page - 1)">&lt; prev</a>
      <a v-if="page < 4" :href="'#/news/' + (page + 1)">more...</a>
    </div>
  </div>
</template>

<script>
import store from '../store'
import Item from './Item.vue'

export default {

  name: 'NewsView',

  components: {
    Item
  },

  data () {
    return {
      page: 1,
      items: []
    }
  },

  mounted () {
    this.$store.dispatch('FETCH_LIST_DATA', 'top').then(() => {
      this.items = this.$store.state.items
    })
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
    top 16px
    left 50%
    transform translateX(-50%)
  .nav
    padding 10px 10px 10px 40px
    margin-top 10px
    border-top 2px solid #f60
    a
      margin-right 10px
      &:hover
        text-decoration underline
</style>
