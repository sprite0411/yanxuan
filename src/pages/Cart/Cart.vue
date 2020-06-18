<template>
  <div>
    <div class="warp">
      <div class="topCart">
        <div class="cartWarp">
          <span class="cart">购物车</span>
          <div class="right">
            <a href="javascript:;">
              领券
            </a>
          </div>
        </div>
      </div>
      <div class="safe">
        <ul class="safeList">
          <li>
            <span class="iconfont icon-yuandian"></span>
            <span class="text">30天无忧退货</span>
          </li>
          <li>
            <span class="iconfont icon-yuandian"></span>
            <span class="text">48小时快速退款</span>
          </li>
          <li>
            <span class="iconfont icon-yuandian"></span>
            <span class="text">满88元免邮费</span>
          </li>
        </ul>
      </div>
      <div class="bigCart">
        <div class="container">
          <div class="img"></div>
          <div class="text">
            <p class="cartTitle">去添加点什么</p>
            <p class="cartButton" @click="toLogin">登录</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      toLogin(){
        this.$router.replace('/profile')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .warp
    padding-bottom: 2.64rem;
    .topCart
      height: 88px;
      .cartWarp
        height: 1.17333rem;
        padding: 0 .4rem;
        line-height: 1.17333rem;
        background-color: #fff;
        position: relative;
        display flex
        align-items center
        justify-content center
        .cart
          font-size: .48rem;
          line-height: 1.17333rem;
          text-align: center;
        .right
          position: absolute;
          top: 0;
          right: .8rem;
          font-size: .4rem;
          line-height: 1.17333rem;
          text-align: center;
          a
            color: #B4282D;
    .safe
      .safeList
        display flex
        height: .93333rem;
        padding: 0 .4rem;
        background: #f4f4f4;
        position: relative;
        align-items center
        justify-content space-between
        li
          display flex
          align-items center
          font-size: .32rem;
          color: #666;
          .iconfont
            margin-right: .08rem;
            font-size .13333rem
            padding-top .06rem
    .bigCart
      position: fixed;
      top: 2rem;
      left: 0;
      bottom: 0;
      //z-index: -1;
      width: 100%;
      background-color: #f4f4f4;
      text-align: center;
      .container
        position: absolute;
        top: -4rem;
        right: 0;
        bottom: 0;
        left: 0;
        height: 4rem;
        margin: auto;
        .img
          background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
          display: inline-block;
          vertical-align: middle;
          width: 3.30667rem;
          height: 3.30667rem;
          margin-bottom: .10667rem;
          background-size: 3.30667rem 3.30667rem;
          background-position: center center;
          background-repeat: no-repeat;
        .text
          font-size: .37333rem;
          line-height: 1;
          color: #7f7f7f;
          .cartTitle
            margin-bottom: .66667rem;
            line-height: 1;
            font-size: .37333rem;
            color: #999;
          .cartButton
            margin: auto;
            width: 6.4rem;
            height: 1.22667rem;
            font-size: .4rem;
            line-height: 1.22667rem;
            color: #fff;
            background-color: #b4282d;
            border-radius: .04rem;
            z-index 10
</style>
