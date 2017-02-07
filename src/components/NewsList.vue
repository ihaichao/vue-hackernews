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

<script lang="ts">
import Vue = require('vue')
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import store from '../store'
import Item from './Item.vue'

@Component({
  components: { Item }
})
export default class NewsList extends Vue {

  items: Object[] = []

  mounted (): void {
    this.fetchItems()
  }

  @Watch('$route') 
  onRouteChanged (): void {
    this.fetchItems()
  }
  
  fetchItems (): void {
    // this.$Progress.start()
    this.$store.dispatch('FETCH_LIST_DATA', {
      type: this.type,
      page: this.page
    }).then(() => {
      // this.$Progress.finish()
      this.items = this.$store.state.items
      this.items.forEach((item, index) => {
        this.$set(item, 'index', (this.page - 1) * this.$store.state.itemsPerPage + index + 1)
      })
    }, () => {
      // this.$Progress.fail()
    })
  }

  get page (): number {
    return Number(this.$store.state.route.params.page) || 1
  }
  
  get type (): string {
    return this.$store.state.route.name
  }

  get path (): string {
    return this.$store.state.route.name === 'top' ? '/' : `/${this.$store.state.route.name}/`
  }

  get maxPage (): number {
    const { itemsPerPage, lists } = this.$store.state
    return Math.ceil(lists[this.type].length / itemsPerPage)
  }

  get hasMore (): boolean {
    return this.page < this.maxPage
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
