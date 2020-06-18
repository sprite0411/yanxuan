<template>
  <div>
    <div class="classifyWrap">
      <div class="searchWrap">
        <div class="search">
          <div class="searchConten">
            <span class="iconfont icon-sousuo"></span>
            <span class="text">搜索商品, 共21750款好物</span>
          </div>
        </div>
      </div>
      <div class="contentList">
        <div class="leftScrollNav">
          <ul class="leftNavList">
            <li class="leftItem" v-for="(item,index) in leftList" :key="index" @click="num(index)">
              <router-link :to="`/classify/${item.id}`">
                <span :class="{active:index===newNum}">{{item.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <router-view :currentCateList="currentCateList">
          <Content />
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import {reqClassify} from '../../api'
  import Bscroll from 'better-scroll'
  import Content from './Content'
  export default {
    data(){
      return{
        leftList:[],
        newNum:''
      }
    },
    async mounted () {
      const result= await reqClassify()
      this.leftList=result.data
      new Bscroll('.leftScrollNav',{
        click:true,
        scrollY:true
      })
      //初始化默认显示第一个为高亮
      this.newNum=0
    },
    methods:{
      num(index){
        this.newNum=index
      }
    },
    computed:{
      currentCateList(){
        const cateList=this.leftList
        const id =this.$route.params.id
        return cateList.find(item=>item.id===+id)

        // if (this.leftList.length>0){
        // }
      },
    },

    components:{Content}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .classifyWrap
    .searchWrap
      border-bottom .02rem solid #ededed
      .search
        display flex
        align-items center
        height: 1.17333rem;
        padding: 0 .4rem;
        background-color: #fff;
        position: relative;
        .searchConten
          width 100%
          display flex
          align-items center
          justify-content center
          height: .74667rem;
          font-size: .37333rem;
          background-color: #ededed;
          border-radius: .10667rem;
          span
            color: #666;
          .iconfont
            font-size .4rem
            margin-right .1rem
    .contentList
      height 525px
      .leftScrollNav
        float: left;
        width: 2.16rem;
        height: 15rem
        background-color: #fff;
        overflow hidden
        .leftNavList
          //padding: .5rem 0;
          display flex
          flex-direction column
          justify-content center
          .leftItem
            position relative
            display flex
            //height: .66667rem;
            align-items center
            justify-content center
            height auto
            &:nth-child(2n)
              margin .25rem 0
            span
              font-size: .37333rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              color #333
              &.active
                color: #ab2b2b;
                &:before
                  content: ' ';
                  position: absolute;
                  top: .5rem;
                  left: 0;
                  bottom: 0;
                  width: .08rem;
                  background-color: #ab2b2b;
</style>
