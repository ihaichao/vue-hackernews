<template>
  <div class="item">
    <span class="index">{{index}}.</span>
    <p>
      <a class="title" :href="href" target="_blank">{{item.title}}</a>
      <span class="domain" v-show="showDomain">
        ({{item.url | domain}})
      </span>
    </p>
    <p class="subtext">
      <span v-show="showInfo">
        {{item.score}} points by
        <a :href="'//news.ycombinator.com/user?id=' + item.by" target="_blank">{{item.by}}</a>
      </span>
      {{item.time | fromNow}} ago
      <span class="comments-link" v-show="showInfo">
        | <a :href="'//news.ycombinator.com/item?id=' + item.id" target="_blank">{{item.descendants | pluralize('comment')}}</a>
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import Vue = require('vue')
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class Item extends Vue {

  @Prop
  item

  @Prop
  index: Number

  get href (): string {
    return this.item.url || ('#/item/' + this.item.id)
  }

  get showInfo (): boolean {
    return this.item.type === 'story' || this.item.type === 'poll'
  }
  
  get showDomain (): boolean {
    return this.item.type === 'story'
  }
}
</script>

<style lang="stylus">
.item
  padding 2px 0 2px 40px
  position relative
  transition background-color .2s ease
  p
    margin 2px 0
  .title:visited
      color #828282
  .index
    color #828282
    position absolute
    width 30px
    text-align right
    left 0
    top 4px
  .domain, .subtext
    font-size 11px
    color #828282
    a
      color #828282
  .subtext a:hover
    text-decoration underline
</style>
