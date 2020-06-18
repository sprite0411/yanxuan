<template>
  <div class="content">
    <div class="contentWarp">
      <div class="contentContainer">
        <div class="banner">
          <a href="javascript:;">
            <img v-lazy="cateList.bannerUrl" :key="cateList.bannerUrl">
          </a>
        </div>
        <div class="cateList">
          <ul class="list">
            <li v-for="(subCate) in cateList.subCateList">
              <a href="javascript:;">
                <img v-lazy="subCate.wapBannerUrl" :key="subCate.wapBannerUrl">
                <p>{{subCate.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    props:{
      currentCateList:Object,
    },
    data(){
      return {
        cateList:'',
        contentList:''
      }
    },
    updated(){
      if (this.currentCateList) {
        this.cateList=this.currentCateList
      }
      new Bscroll('.content',{
        click:true
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    margin-left: 2.16rem;
    padding: 0 .4rem .28rem;
    height: 15rem;
    overflow: hidden;
    .contentWarp
      padding-top .4rem
      .contentContainer
        .banner
          position: relative;
          width: 100%;
          height: 2.56rem;
          display: table;
          margin-bottom: .42667rem;
          background: center no-repeat #f4f4f4;
          background-size: cover;
          border-radius: 4px;
          img
            display block
            width 100%
            height 2.56rem
        .cateList
          .list
            display flex
            flex-wrap wrap
            align-items center
            li
              display: flex
              margin-right: .4rem;
              font-size: 0;
              width: 1.92rem;
              vertical-align: top;
              a
                img
                  display block
                  background: #fff
                  width 100%
                  height auto
                p
                  height: .96rem;
                  font-size: .32rem;
                  color: #333;
                  text-align: center;
                  line-height: .48rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
</style>
