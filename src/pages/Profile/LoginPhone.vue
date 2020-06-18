<template>
  <div class="loginWrap">
    <LoginHeader/>
    <div class="phoneLogin">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
      </div>
      <form>
        <input type="text" placeholder="请输入手机号" class="phone" v-model="phone" @blur="registerPhone">
        <div class="msg">
          <input type="text" placeholder="请输入短信验证码" @blur="registerCode" v-model="code">
          <button class="verify" :disabled="isClick">获取验证码</button>
        </div>
        <div class="errMsg" v-if="phone.trim() || code.trim()">{{this.errMsg}}</div>
        <div class="detail">
          <span class="left">遇到问题？</span>
          <span class="right" style="color: #333">使用密码验证登录</span>
        </div>
        <button class="button" :disabled="isClick">登录</button>
        <div class="otherLogin">其他方式登录</div>
        <div class="register">注册账号></div>
      </form>
    </div>
  </div>
</template>

<script>
  import LoginHeader from '../../components/LoginHeader/LoginHeader'
  export default {
    data(){
      return{
        phone:'',
        code:'',
        errMsg:'',
        isClick:true
      }
    },
    methods:{
      registerPhone(){
        if (!/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(this.phone.trim())) {
          this.errMsg='请输入正确的手机号'
        }else {
          this.errMsg=''
        }
      },
      registerCode(){
        if (!/^\d{6}$/.test(this.code.trim()) && this.phone){
          this.errMsg='请输入6位短信验证码'
        }else {
          this.errMsg=''
          this.isClick=false
        }
      }
    },
    components:{LoginHeader}

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginWrap
    background-color: white
  .phoneLogin
    margin-top 78px
    text-align center
    .logo
      margin-bottom: 1.8rem;
      text-align center
      img
        width: 2.56rem;
        height: 0.85333rem;
    .phone
      width: 90%;
      height: 1.2rem;
      font-size: 0.38rem;
      line-height: 0.6rem;
      margin: 0.39rem 0;
      padding-left: 0;
      -webkit-tap-highlight-color: transparent;
      outline: none;
      border-bottom: 1px solid #bdbdbd;
    .msg
      position: relative;
      left: 0;
      top: 0;
      display: inline-block;
      width: 90%;
      input
        width: 100%;
        height: 1.2rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        border-bottom: 1px solid #bdbdbd;
      .verify
        position: absolute;
        right: 0;
        top: 0.5rem;
        font-size: 0.36rem;
        width: 2.3rem;
        height: 0.75rem;
        text-align: center;
        color: #333;
        background: #fff;
        line-height: 0.75rem;
        border: 1px solid #333;
        border-radius: 10px;
    .errMsg
      color #b4282d;
      font-size .3rem
      float left
      margin .1rem 0 0 .39rem
      position fixed
    .detail
      line-height: 0.6rem;
      color: #7f7f7f !important;
      font-size: 0.38rem;
      display flex
      justify-content space-between
      padding: 0.4rem 0.4rem;
    .button
      width: 90%;
      display: inline-block;
      margin: 0.42667rem 0;
      height: 1.25333rem;
      line-height: 1.25333rem;
      text-align: center;
      font-size: 0.37333rem;
      color: #fff;
      border: 1px solid #b4282d;
      background-color: #b4282d;
      border-radius: 4px;
    .otherLogin
      width: 90%;
      display: inline-block;
      margin-bottom: 0.4rem;
      height: 1.25333rem;
      line-height: 1.25333rem;
      text-align: center;
      font-size: 0.37333rem;
      color: #b4282d;
      border: 1px solid #b4282d;
      border-radius: 4px;
    .register
      font-size: 0.37333rem;
      line-height: 0.53333rem;
      color: #333;
</style>
