<template>
	<div class="news-header">
    <div class="logo"></div>
    <ul class="nav">
    	<router-link class="title" :to="{ name: 'top' }">Hacker News</router-link>
      <router-link class="tab" :to="{ name: 'new' }">new</router-link>
      <router-link class="tab" :to="{ name: 'show' }">show</router-link>
      <router-link class="tab" :to="{ name: 'ask' }">ask</router-link>
      <router-link class="tab" :to="{ name: 'job' }">jobs</router-link>
    </ul>
    <span class="project-info">Built with Vue.js | <a class="source" href="https://github.com/ihaichao/vue2-hackernews.git">Source</a></span>
	</div>
</template>

<style lang="stylus">
.news-header
  display flex
  align-items center
  padding 2px
  background-color #ff6600

  .logo
    width 18px
    height 18px
    background-image url('../assets/logo.gif')
    border 1px solid #fff
    margin-right 4px

  .nav
    flex-grow 1
    .title
      font-weight bold
      margin-right 10px
    .tab
      &::after
        content '|'
        color #000
        margin-left 3px
      &:last-child
        &::after
          content ''
      &.router-link-active
        color #fff
  .project-info
    color #fff
    .source
      color #fff
</style>
