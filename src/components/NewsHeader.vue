<template>
	<div class="news-header">
    <div class="logo"></div>
    <ul class="nav">
    	<a class="title" href="/">Hacker News</a>
      <a class="tab" href="/newest">new</a>
      <a class="tab" href="/newcomments">comments</a>
      <a class="tab" href="/show">show</a>
      <a class="tab" href="/ask">ask</a>
      <a class="tab" href="/jobs">jobs</a>
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
      &:last-child
        &::after
          content ''
  .project-info
    color #fff
    .source
      color #fff
</style>
