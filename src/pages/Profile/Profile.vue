<template>
  <div>
    <div class="wrap">
      <LoginHeader>
        <div class="logo" slot="middleTitle"></div>
      </LoginHeader>
      <div class="other">
        <div class="bigLogo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
        </div>
        <div class="phoneLogin" @click="$router.replace('/profile/loginphone')">
          <span class="iconfont icon-shouji"></span>
          <span class="content">手机号码登录</span>
        </div>
        <div class="emailLogin">
          <span class="iconfont icon-youxiang"></span>
          <span class="content">邮箱账号登录</span>
        </div>
        <div class="quickLogin">手机号快捷注册></div>
        <div class="anyLogin">
          <div class="wechat">
            <span class="iconfont icon-weixin"></span>
            <span>微信</span>
          </div>
          <div class="qq">
            <span class="iconfont icon-qq"></span>
            <span>QQ</span>
          </div>
          <div class="weibo">
            <span class="iconfont icon-weibo"></span>
            <span> 微博</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginHeader from '../../components/LoginHeader/LoginHeader'
  export default {
    components:{LoginHeader}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #f2f5f4;
    .other
      height: 100%;
      //text-align: center
      display flex
      flex-direction column
      align-items center
      .bigLogo
        padding-top: 2.13333rem;
        padding-bottom: 2.13333rem;
        text-align: center;
        img
          width: 3.57333rem;
          height: 1.2rem;
      .phoneLogin
        width: 90%;
        display: flex;
        align-items center
        justify-content center
        margin: 0.42667rem 0;
        height: 1.25333rem;
        line-height: 1.25333rem;
        font-size: 0.37333rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        border-radius: 4px;
        .iconfont
          font-size .5rem
          margin-right .1rem

      .emailLogin
        width: 90%;
        display flex
        align-items center
        justify-content center
        margin-bottom: 0.4rem;
        height: 1.25333rem;
        font-size: 0.37333rem;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: 4px;
        .iconfont
          font-size .38rem
          margin-right .1rem
      .quickLogin
        color: #333;
        font-size: 0.37333rem;
        text-align: center;
      .anyLogin
        margin-top: 5rem;
        font-size: 0.4rem;
        line-height: 0.53333rem;
        height: 0.53333rem;
        color: #7f7f7f;
        margin-left: 0.06667rem;
        display flex
        justify-content center
        div
          display flex
          justify-content center
          width: 2.33333rem;
          border-right: 2px solid;
          &:last-child
            border-right: 0
          span
            &:last-child
              margin-left .1rem
        .iconfont
          font-size .4rem


</style>
