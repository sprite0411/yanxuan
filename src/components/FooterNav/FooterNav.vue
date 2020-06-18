<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on:$route.path==='/home'}" @click="goTo('/home')"> <!--类名确定, 只是不确定有没有-->
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path.split('/')[1]==='classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-chouti"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path.split('/')[1]==='discern'}" @click="goTo('/discern')">
      <span class="item_icon">
        <i class="iconfont icon-tuxiangshibie"></i>
      </span>
      <span>识货</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/cart'}" @click="goTo('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/profile'}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span class="text">我的</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .footer_guide
    border-top: 1px solid #d9d9d9;
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 1.30667rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      .text
        margin-top: .09333rem;
      span
        font-size .32rem;
        margin-top 10px
        margin-bottom 2px
        .iconfont
          font-size .5rem

</style>
