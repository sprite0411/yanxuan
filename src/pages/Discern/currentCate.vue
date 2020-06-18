<template>
  <div class="tabContent">
    <div class="content">
      <ul class="contentList">
        <li class="contentItem" v-for="(opic,index) in rcqtopics" :key="index">
          <div class="styl1" v-if="opic.style===1">
            <div class="user">
              <img v-lazy="opic.avatar">
              <span>{{opic.nickname}}</span>
            </div>
            <p class="title">{{opic.title}}</p>
            <div class="titleBanner">
              <img v-lazy="opic.picUrl">
            </div>
            <div class="seen">
              <span class="iconfont icon-chakanguo"></span>
              <span>{{opic.readCount}}人看过</span>
            </div>
          </div>
          <div class="styl2" v-if="opic.style===2">
            <div class="info">
              <div class="styl2_user">
                <img v-lazy="opic.avatar">
                <span>{{opic.nickname}}</span>
              </div>
              <p class="styl2_title">{{opic.title}}</p>
              <p class="styl2_subTitle">{{opic.subTitle}}</p>
              <div class="styl2_seen">
                <span class="iconfont icon-chakanguo"></span>
                <span>{{opic.readCount}}人看过</span>
              </div>
            </div>
            <div class="img">
              <img v-lazy="opic.picUrl">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    mounted(){
      this.scroll=new Bscroll('.tabContent',{
        click:true,
        scrollY:true,
        pullUpLoad:{
          threshold: 500,
        }
      })
      this.scroll.on('pullingUp',()=>{
        this.$store.dispatch('acqAuto')
        this.scroll.finishPullUp()
      })
    },
    computed:{
      ...mapGetters(['rcqtopics'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tabContent
    width 100%
    height 16.7rem
    background: #eee
    padding 0 0 1.30667rem 0
    margin-top .9rem
    .content
      padding-bottom 1.2rem
      .contentList
        .contentItem
          padding: .36rem .35rem;
          margin .2rem 0;
          background: #ff
          .styl1
            .user
              font-size .4rem
              color #333
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              display flex
              align-items center
              img
                width .8rem
                height .8rem
                border-radius 50%
                border: .01rem solid #d9d9d9;
                margin-right: .12rem;

            .title
              font-size .45rem
              color #333
              margin: .3rem .1rem .16rem 0.1rem
              overflow: hidden;
              text-overflow: ellipsis;
              line-height .7rem
            .titleBanner
              width: 9.2rem;
              height: 5rem;
              position: relative;
              margin: 0 0 .2rem .08rem;
              overflow: hidden;
              border-radius: .08rem;
              img
                width 100%
                height 100%
            .seen
              font-size: .3rem;
              color: #999;
              line-height: .32rem;
              margin: .18rem 0 0 .1rem;
              display flex
              align-items center
              .iconfont
                font-size .4rem
                margin-right .05rem
          .styl2
            display flex
            .info
              width 5rem
              .styl2_user
                font-size .4rem
                color #333
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                display flex
                align-items center
                img
                  width .8rem
                  height .8rem
                  border-radius 50%
                  border: .01rem solid #d9d9d9;
                  margin-right: .12rem;


              .styl2_title
                width 100%
                font-size: .45rem;
                color: #333;
                line-height: .6rem;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-top: .32rem;
              .styl2_subTitle
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: .38rem;
                line-height: .4rem;
                padding-top: .2rem;
                color: #7f7f7f;
              .styl2_seen
                font-size: .3rem;
                color: #999;
                line-height: .32rem;
                margin-top: .4rem;
                display flex
                align-items center
                .iconfont
                  font-size .4rem
                  margin-right .05rem

            .img
              width: 4rem;
              height: 3.8rem;
              position: relative;
              overflow: hidden;
              border-radius: .08rem;
              margin-left .2rem
              img
                width 100%
                height 100%
</style>
