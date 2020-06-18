<template>
  <div class="discernWrap">
    <Hearder>
      <div slot="middleTitle" class="discernTTw">
        <span class="topTitle first active">发现</span>
        <span class="topTitle">甄选家</span>
      </div>
    </Hearder>
    <div class="tabNav">
      <div class="tabNavWrap">
        <ul class="tabNavList">
          <li class="tabNavItem" v-for="(nav,index) in tabNav" :key="index"
          :class="{active:index===$route.params.id*1}">
            <router-link :to="`/discern/${index}`">
              <span>{{nav.tabName}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view>
      <CurrentCate/>
    </router-view>
  </div>
</template>

<script>
  import CurrentCate from './currentCate'
  import Hearder from '../../components/LoginHeader/LoginHeader'
  import {mapState} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('acqTabNav')
      this.$store.dispatch('acqTabContent')
    },
    updated(){
      new Bscroll('.tabNavWrap',{
        click:true,
        scrollX:true
      })
    },
    computed:{
      ...mapState(['tabNav']),
      ...mapState(['tabContent']),
    },
    components:{
      Hearder,
      CurrentCate
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .discernWrap
    background: #f4f4f4
    .discernTTw
      height: 0.72rem;
      line-height 0.72rem
      position absolute
      left 35%
      display flex
      .topTitle
        font-size .4rem
        color #7F7F7F
      .first
        margin-right .5rem
        &.active
          color #b4282d
          font-size .5rem
          font-weight bold
    .tabNav
      background: #fafafa;
      border-bottom: 0.01rem solid #d9d9d9;
      border-top 0.015rem solid #d9d9d9
      margin-top: -.059rem;
      height .9rem
      font-size .36rem
      color #7F7F7F
      width 100%
      position fixed
      z-index 5
      .tabNavWrap
        height 100%
        width 100%
        overflow hidden
        .tabNavList
          display: -webkit-box;
          height 100%
          width 130%
          .tabNavItem
            display flex
            align-items center
            height 100%
            margin 0 .35rem
            padding 0 .1rem
            &.active
              color: #B4282D;
              border-bottom: .03rem solid #B4282D;
</style>
