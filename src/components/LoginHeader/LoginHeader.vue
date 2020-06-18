<template>
  <div class="header">
    <div class="headerContent">
      <div class="goHome" @click="$router.replace('/')">
        <span class="iconfont icon-shouye"></span>
      </div>
      <slot name="middleTitle"></slot>
      <div class="searchAndCart">
        <div class="cart" @click="$router.replace('/cart')">
          <span class="iconfont icon-gouwuche"></span>
        </div>
        <div class="search" @click="$router.replace('/search')">
          <span class="iconfont icon-sousuo"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginHeader'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    border: none;
    //position: fixed;
    left: 0;
    top: 0;
    z-index: 200;
    width: 100%;
    height: 88px;
    background-color: #fafafa;
    border-bottom .02rem solid #eee
    .headerContent
      width: 100%;
      position: fixed !important;
      left: 0;
      top: 0;
      z-index: 100;
      background-color: #fafafa;
      -webkit-box-sizing: border-box;
      margin: auto;
      overflow: hidden;
      padding: 0.1rem 0.4rem 0 0.4rem;
      text-align: center;
      .goHome
        float: left;
        height: 1rem;
        line-height: 1rem;
        padding-right: 0.02rem;
        font-size 100%
        .iconfont
          font-size .68rem
          display block
      .logo
        width: 2.29333rem;
        height: 0.72rem;
        margin-left: 0.8rem;
        background-position: 0 -1.70667rem;
        display: inline-block;
        background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png");
        background-repeat: no-repeat;
        background-size: 2.29333rem 5.6rem;
      .searchAndCart
        float: right;
        height: 1rem;
        line-height: 1rem;
        padding-right: 0.02rem;
        .cart
          float right
        .search
          float right
          margin-right .5rem
        .iconfont
          display block
          font-size .6rem
          color #333

</style>
