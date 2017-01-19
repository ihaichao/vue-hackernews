<template>
  <div id="app">
  	<NewsHeader></NewsHeader>
    <router-view class="view"></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import NewsHeader from './NewsHeader'

export default {
  name: 'app',
  components: {
    NewsHeader
  }
}
</script>

<style lang="stylus">
html, body
  font-family Verdana
  font-size 13px
  height 100%
  
ul
  list-style-type none
  padding 0
  margin 0
a
  color #000
  cursor pointer
  text-decoration none

#app
  width 85%
  min-height 80px
  margin 0 auto
  position relative
  background-color #f6f6ef
.view
  position absolute
  background-color #f6f6ef
  width 100%
  transition opacity .2s ease
  box-sizing border-box
  padding 8px 20px
  &.v-enter, &.v-leave
    opacity 0
</style>
