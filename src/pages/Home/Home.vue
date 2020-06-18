<template>
  <div class="warp">
    <header>
      <div class="top">
        <div class="show">
          <div class="search">
            <a href="javascript:;" class="logo"></a>
            <div class="searchInput">
              <i class="icon"></i>
              <span class="placeholder">搜索商品, 共21717款好物</span>
            </div>
            <div class="loginBtn">登录</div>
          </div>
          <div class="navTab">
            <div class="nav" v-show="!showTab">
              <ul>
                <li class="active">推荐</li>
                <li>居家生活</li>
                <li>服饰箱包</li>
                <li>美食酒水</li>
                <li>个人清洁</li>
                <li>母婴亲子</li>
              </ul>
            </div>
            <div class="toggleNav">
              <div class="linear"></div>
                <div class="toggle" @click="showTabList">
                  <!--<i class="iconfont icon-xia"></i>-->
                  <div class="icon" :class="{rotateShow:showTab}"></div>
                </div>
            </div>
            <div class="other" v-show="showTab">全部频道</div>
            <ul class="otherList" v-show="showTab">
              <li class="active">推荐</li>
              <li>居家生活</li>
              <li>服饰鞋包</li>
              <li>美食酒水</li>
              <li>个护清洁</li>
              <li>母婴亲子</li>
              <li>运动旅行</li>
              <li>数码家电</li>
              <li>礼品特色</li>
            </ul>
          </div>
          <div class="mask" v-show="showTab"></div>
        </div>
        <div class="activeBanner">
      </div>
      </div>
    </header>
    <div class="slideshow">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src='https://yanxuan.nosdn.127.net/755de2b5b9ca61eaf701fbea336fb1a0.jpg?imageView&quality=75&thumbnail=750x0'>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src='https://yanxuan.nosdn.127.net/27ed2c9546d04dcdbc9e7a8b72259be2.jpg?imageView&quality=75&thumbnail=750x0'>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src='https://yanxuan.nosdn.127.net/673819dd9138d2b1448fb4f930ec30b4.jpg?imageView&quality=75&thumbnail=750x0'>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src='https://yanxuan.nosdn.127.net/4ebefa195803f5fa9596296867d0a93a.jpg?imageView&quality=75&thumbnail=750x0'>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src='https://yanxuan.nosdn.127.net/d016f5485630bfa9c2c05149500689e8.jpg?imageView&quality=75&thumbnail=750x0'>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src='https://yanxuan.nosdn.127.net/ed3c5a043b801a9fd225b0ab4a30729b.png?imageView&quality=75&thumbnail=750x0'>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src='https://yanxuan.nosdn.127.net/456abfb6e481a941444e8840005c88ed.jpg?imageView&quality=75&thumbnail=750x0'>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src='https://yanxuan.nosdn.127.net/3ef9aa04a6826b18a9382e3d687d24e3.jpg?imageView&quality=75&thumbnail=750x0'>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="explain">
      <ul>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-wangyi"></i>
            <span>网易自营品牌</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-baozhang"></i>
            <span>30天无忧退货</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-rechange"></i>
            <span>48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
    <div id="classifyNav">
      <ul>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png">
            <span>居家生活</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png">
            <span>居家生活</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/fb9dde0c1593536c18c8e12b6f49eb17.png">
            <span>居家生活</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png">
            <span>居家生活</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png">
            <span>居家生活</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/63682bd2df06963251b2715e20f98a75.png">
            <span>居家生活</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png">
            <span>居家生活</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/23be40a05926faf2f2a81a08a1c53164.png">
            <span>居家生活</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/e83bd330713b66a8d4e8eb0cefed8996.png">
            <span>居家生活</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/51f5a91f10ba745ec68340b98315acf5.png">
            <span>居家生活</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="activity">
      <div class="nowActivity">
        <div class="womanDay">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/15519407811151838.gif?imageView&thumbnail=750x0&quality=75">
          </a>
        </div>
        <div class="anyActivity">
          <ul>
            <li>
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/15519497825531997.jpg?imageView&thumbnail=375x0&quality=75">
              </a>
            </li>
          </ul>
        </div>
        <div class="bg1"></div>
        <div class="bg2"></div>
      </div>
      <div class="koala">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/e0e6ac580c822602d83fe42f3e0b4b58.png">
        </a>
      </div>
      <div class="shopGuide">
        <ul>
          <li>
            <a href="javascript:;">
              <p class="text-title">女王の专属美食阁</p>
              <p class="text-detail">3件75折/每满150减30</p>
              <div>
                <img src="http://yanxuan.nosdn.127.net/2b7ffdac363edd686b0471de1655c813.png?imageView&thumbnail=150x150&quality=75">
                <img src="http://yanxuan.nosdn.127.net/d84dbafe215d765fb5bbd75e642ad445.png?imageView&thumbnail=150x150&quality=75">
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <p class="text-title">2019明前龙井</p>
              <p class="text-detail">预售好价75折</p>
              <div>
                <img src="http://yanxuan.nosdn.127.net/f958c8b4e8d6dfa7fc574bd06b530821.png?imageView&thumbnail=150x150&quality=75">
                <img src="http://yanxuan.nosdn.127.net/c33ee95d358956a927708d16d67d727e.png?imageView&thumbnail=150x150&quality=75">
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <p class="text-title">按摩神器大赏</p>
              <p class="text-detail">仿真人手按摩</p>
              <div>
                <img src="http://yanxuan.nosdn.127.net/0fc3975b621704cb00328ef96cdce963.png?imageView&thumbnail=150x150&quality=75">
                <img src="http://yanxuan.nosdn.127.net/823652e902ffeb49f50381b93e7e0be0.png?imageView&thumbnail=150x150&quality=75">
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <p class="text-title">热销百强榜</p>
              <p class="text-detail">全站实时更新</p>
              <div>
                <img src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?imageView&thumbnail=150x150&quality=75">
                <img src="http://yanxuan.nosdn.127.net/31dc9401203e8e6f99572abfc4e047a3.png?imageView&thumbnail=150x150&quality=75">
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="private">
        <div class="title">
          <span>私人定制</span>
        </div>
        <div class="swiperTwo">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <li>
                  <a href="javascript:;">
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/06e5818658707bc182acabe92cae3d34.png?imageView&quality=65&thumbnail=330x330">
                    </div>
                    <div class="content">
                      <span>5提30包 谷风一木3层...</span>
                      <span class="price">￥75</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/de5d87c7cb0f5f0d92a3e5d52019b55e.png?imageView&quality=65&thumbnail=330x330">
                    </div>
                    <div class="content">
                      <span>网易智造N520除螨吸尘...</span>
                      <span class="price">￥499</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/f903596e3df99c49dfff6a79dbe36994.png?imageView&quality=65&thumbnail=330x330">
                    </div>
                    <div class="content">
                      <span>轻柔无捻毛巾</span>
                      <span class="price">￥59</span>
                    </div>
                    <div class="specification">
                      <span>8</span>
                      <span>色</span>
                      <span>可</span>
                      <span>选</span>
                    </div>
                  </a>
                </li>
              </div>
              <div class="swiper-slide">
                <li>
                  <a href="javascript:;">
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/2aa08665d323377275a52d35119d7471.png?imageView&quality=65&thumbnail=330x330">
                    </div>
                    <div class="content">
                      <span>手卷压缩，简单操作</span>
                      <span class="price">￥29.9</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/63e6c61b7387f9fcba0d6be046782a80.png?imageView&quality=65&thumbnail=330x330">
                    </div>
                    <div class="content">
                      <span>一纸三层，吸水耐用不易破</span>
                      <span class="price">￥18.9</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png?imageView&quality=65&thumbnail=330x330">
                    </div>
                    <div class="content">
                      <span>每日坚果</span>
                      <span class="price">￥32.8</span>
                    </div>
                    <div class="specification">
                      <span>8</span>
                      <span>色</span>
                      <span>可</span>
                      <span>选</span>
                    </div>
                  </a>
                </li>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div class="limited">
        <div class="countDown">
          <div class="left">
            <span>限时购</span>
            <div>
              <span class="time">01</span>
              <span class="dot">:</span>
              <span class="time">49</span>
              <span class="dot">:</span>
              <span class="time">29</span>
            </div>
          </div>
          <a href="javascript:;" class="right">
            <span>更多</span>
            <i class="iconfont icon-youjiantou"></i>
          </a>
        </div>
        <ul class="ctList">
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/5703e307fd8460f6b2791fd23368f885.png?imageView&thumbnail=216x216&quality=75">
              <div>
                <span>￥99</span>
                <span class="oldPrice">￥129</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/d851d7bf00b4fa3cc42c4ec7a2ffb218.png?imageView&thumbnail=216x216&quality=75">
              <div>
                <span>￥332</span>
                <span class="oldPrice">￥480</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/2d43d642d928240ef2013e8da1c133b2.png?imageView&thumbnail=216x216&quality=75">
              <div>
                <span>￥38</span>
                <span class="oldPrice">￥45</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/64f33b256b0f8660b8b6184dbf9bfdc2.png?imageView&thumbnail=216x216&quality=75">
              <div>
                <span>￥129</span>
                <span class="oldPrice">￥158</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/f642d93131227b12600ef3b9c60e3c59.png?imageView&thumbnail=216x216&quality=75">
              <div>
                <span>￥178</span>
                <span class="oldPrice">￥199</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/59beb2417ba4e86134819a972038c5bd.png?imageView&thumbnail=216x216&quality=75">
              <div>
                <span>￥899</span>
                <span class="oldPrice">￥999</span>
              </div>
            </a>
          </li>
        </ul>
        <div class="line"></div>
      </div>
      <div class="new limited">
        <div class="countDown">
          <div class="left">
            <span>新品首发</span>
          </div>
          <a href="javascript:;" class="right">
            <span>更多</span>
            <i class="iconfont icon-youjiantou"></i>
          </a>
        </div>
        <ul class="newList">
          <li class="name">
            <a href="javascript:;" class="good">
              <img src="http://yanxuan.nosdn.127.net/24320570a1ea380d50deb1e509afb522.png?imageView&quality=65&thumbnail=330x330">
              <div class="detailAndPrice">
                <span class="detail">2019明前特级西湖龙井 ...</span>
                <span class="oldPrice">￥129</span>
              </div>
              <div class="priceDetail">
                <p>预售好价</p>
              </div>
            </a>
          </li>
          <li class="name">
            <a href="javascript:;" class="good">
              <img src="http://yanxuan.nosdn.127.net/0d2be0814698ad895c45761065faf65e.png?imageView&quality=65&thumbnail=330x330">
              <div class="detailAndPrice">
                <span class="detail">舒软女士牛皮乐福鞋</span>
                <span class="oldPrice">￥299</span>
              </div>
              <div class="specification">
                <span>2</span>
                <span>色</span>
                <span>可</span>
                <span>选</span>
              </div>
            </a>
          </li>
          <li class="name">
            <a href="javascript:;" class="good">
              <img src="https://yanxuan.nosdn.127.net/07d3c13d53aa2fb906cafd14af4189a5.png?imageView&quality=65&thumbnail=330x330">
              <div class="detailAndPrice">
                <span class="detail">不知火丑橘 6斤</span>
                <span class="oldPrice">￥59</span>
              </div>
              <div class="priceDetail">
                <p>特价</p>
              </div>
            </a>
          </li>
          <li class="name">
            <a href="javascript:;" class="good">
              <img src="https://yanxuan.nosdn.127.net/d4a34c6e21113b27a47aee26e2047fd6.png?imageView&quality=65&thumbnail=330x330">
              <div class="detailAndPrice">
                <span class="detail">女式文雅格纹西装</span>
                <span class="oldPrice">￥499</span>
              </div>
              <div class="priceDetail">
                <p>券</p>
              </div>
            </a>
          </li>
          <li class="name">
            <a href="javascript:;" class="good">
              <img src="https://yanxuan.nosdn.127.net/22a305b48aa93b2605a0ba2f47bf1485.png?imageView&quality=65&thumbnail=330x330">
              <div class="detailAndPrice">
                <span class="detail">日本制造 清酒 纯米大吟酿...</span>
                <span class="oldPrice">￥189</span>
              </div>
              <div class="specification">
                <span>日</span>
                <span>本</span>
                <span>制</span>
                <span>造</span>
              </div>
            </a>
          </li>
          <li class="name">
            <a href="javascript:;" class="good">
              <img src="https://yanxuan.nosdn.127.net/991aec17019ef52b7a4779bb9c0fcb8d.png?imageView&quality=65&thumbnail=330x330">
              <div class="detailAndPrice">
                <span class="detail">女式优雅波点中长连衣裙</span>
                <span class="oldPrice">￥369</span>
              </div>
              <div class="specification">
                <span>2</span>
                <span>色</span>
                <span>可</span>
                <span>选</span>
              </div>
            </a>
          </li>
        </ul>
        <div class="line"></div>
      </div>
      <div class="popularity limited">
        <div class="countDown">
          <div class="left">
            <span>人气推荐</span>
          </div>
          <a href="javascript:;" class="right">
            <span>更多</span>
            <i class="iconfont icon-youjiantou"></i>
          </a>
        </div>
        <ul class="newList" style="padding-bottom:.4rem">
          <a href="javascript:;" class="popularityCatg">
            <div class="bannerItem">
              <img src="https://yanxuan.nosdn.127.net/73af63aa5c47c369fe7e2f30b3815aac.png?imageView&quality=65&thumbnail=280x280">
            </div>
            <div class="detailItem">
              <p class="one">好货内部价</p>
              <p class="two">网易智造减压眼部按摩仪</p>
              <p class="three">让眼睛享受全方位按摩</p>
              <div>
                <span class="price">￥359</span>
              </div>
            </div>
          </a>
          <li class="name">
            <a href="javascript:;" class="good">
              <img src="https://yanxuan.nosdn.127.net/acccca2cb5615ee557cddaf6512ee589.png?imageView&quality=65&thumbnail=330x330">
              <div class="detailAndPrice">
                <span class="detail">西班牙制造 高浓VC保湿抗...</span>
                <span class="oldPrice">￥379</span>
              </div>
              <div class="priceDetail">
                <p>限时购</p>
              </div>
              <div class="specification">
                <span>西</span>
                <span>班</span>
                <span>牙</span>
                <span>制</span>
                <span>造</span>
              </div>

            </a>
          </li>
          <li class="name">
            <a href="javascript:;" class="good">
              <img src="https://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png?imageView&quality=65&thumbnail=330x330">
              <div class="detailAndPrice">
                <span class="detail">网易智造蒸汽沐足盆</span>
                <span class="oldPrice">￥449</span>
              </div>

            </a>
          </li>
          <li class="name">
            <a href="javascript:;" class="good">
              <img src="https://yanxuan.nosdn.127.net/0ab8d29a2926cb060fa7842bb1c1f42b.png?imageView&quality=65&thumbnail=330x330">
              <div class="detailAndPrice">
                <span class="detail">镁离子净水壶（含滤芯）</span>
                <span class="oldPrice">￥163</span>
              </div>
              <div class="specification">
                <span>德</span>
                <span>国</span>
                <span>制</span>
                <span>造</span>
              </div>
              <div class="priceDetail">
                <p>女王节特惠</p>
              </div>
            </a>
          </li>
        </ul>
        <div class="line"></div>
      </div>
      <div class="hot limited">
        <div class="countDown">
          <div class="left">
            <span>类目热销榜</span>
          </div>
        </div>
        <div class="hotContent">
          <div class="topTwo">
            <a href="javascript:;">
              <div class="hotLeft">
                <span class="hotItem">热销榜</span>
              </div>
              <div>
                <img src="https://yanxuan.nosdn.127.net/d78a90f7f496656b79e4559935031958.png?imageView&quality=65&thumbnail=200x200">
              </div>
            </a>
            <a href="javascript:;" style="background: #EBEFF6">
              <div class="hotLeft">
                  <span class="hotItem">好评榜</span>
              </div>
              <div>
                <img src="https://yanxuan.nosdn.127.net/78ae44614ab3ccb317821fa55a6eb406.png?imageView&quality=65&thumbnail=200x200">
              </div>
            </a>
          </div>
          <ul>
            <li>
              <a href="javascript:;">
                <p>居家生活榜</p>
                <img src="https://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png?imageView&quality=65&thumbnail=200x200">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>服饰鞋包榜</p>
                <img src="https://yanxuan.nosdn.127.net/63c5f749c41c193731ffec74cb846642.png?imageView&quality=65&thumbnail=200x200">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>美食酒水榜</p>
                <img src="https://yanxuan.nosdn.127.net/f30aed47a37dc03270e98ba3ab4ca572.png?imageView&quality=65&thumbnail=200x200">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>数码家电榜</p>
                <img src="https://yanxuan.nosdn.127.net/73a065d6fc8c32197b54421808c54788.png?imageView&quality=65&thumbnail=200x200">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>个人清洁榜</p>
                <img src="https://yanxuan.nosdn.127.net/dfe93936f47b66f4b8a4f1869f0ce828.png?imageView&quality=65&thumbnail=200x200">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>运动旅行榜</p>
                <img src="https://yanxuan.nosdn.127.net/e65a0301983305d68adb0ae7f9890bd2.png?imageView&quality=65&thumbnail=200x200">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>母子亲子榜</p>
                <img src="https://yanxuan.nosdn.127.net/0390a3aa000eeb416101e2c10cba9883.png?imageView&quality=65&thumbnail=200x200">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>礼品特色榜</p>
                <img src="https://yanxuan.nosdn.127.net/55425f24345d01992d61a1646325ac94.png?imageView&quality=65&thumbnail=200x200">
              </a>
            </li>
          </ul>
        </div>
        <div class="line"></div>
      </div>
      <div class="welfare">
        <ul>
          <li>
            <a href="javascript:;">
              <div class="modleAndPrice">
                <img src="https://yanxuan.nosdn.127.net/0689b116bba0ef8a31f7288f0cf7d365.png?imageView&thumbnail=200x200&quality=75">
                <div class="discount">
                  <span class="now">￥225</span>
                  <span class="old">￥299</span>
                </div>
              </div>
              <div class="content">
                <p>福利社</p>
                <p>抢超值神券</p>
                <p>享今日特价</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="modleAndPrice">
                <img src="https://yanxuan.nosdn.127.net/5c2bd19ec4547f2ad6f3683ae82d0a6a.png?imageView&thumbnail=200x200&quality=75">
                <div class="discount">
                  <span class="now">￥249</span>
                  <span class="old">￥289</span>
                </div>
              </div>
              <div class="content">
                <p>严选一起拼</p>
                <p>超值1元团</p>
                <p class="tag" style="color: #fff">全场包邮</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="modleAndPrice">
                <img src="https://yanxuan.nosdn.127.net/085e64a23196db50a97babbca75f6a53.gif?imageView&thumbnail=200x200&quality=75">
              </div>
              <div class="content">
                <p>会员俱乐部</p>
                <p>领取每月礼券</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="modleAndPrice">
                <img src="https://yanxuan.nosdn.127.net/4cd2a378b7d8172b262a446b0a4d4779.gif?imageView&thumbnail=200x200&quality=75">
              </div>
              <div class="content">
                <p>积分兑换</p>
                <p>兑换0元领，限时限量</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="made limited">
        <div class="countDown">
          <div class="left">
            <span>品牌制造商直供</span>
          </div>
          <a href="javascript:;" class="right">
            <span>更多</span>
            <i class="iconfont icon-youjiantou"></i>
          </a>
        </div>
        <ul class="newList" style="padding-bottom:.4rem">
          <li class="name">
            <a href="javascript:;">
              <div class="detail">
                <p>海外制造商</p>
                <div class="price">
                  <span>9.9元起</span>
                  <span class="new">上新</span>
                </div>
              </div>
            </a>
          </li>
          <li class="name">
            <a href="javascript:;">
              <div class="detail">
                <p>CK制造商</p>
                <div class="price">
                  <span>32.9元起</span>
                  <span class="new">上新</span>
                </div>
              </div>
            </a>
          </li>
          <li class="name">
            <a href="javascript:;">
              <div class="detail">
                <p>新秀丽制造商</p>
                <div class="price">
                  <span>34.9元起</span>
                </div>
              </div>
            </a>
          </li>
          <li class="name">
            <a href="javascript:;">
              <div class="detail">
                <p>Nine West制造商</p>
                <div class="price">
                  <span>219元起</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <div class="line"></div>
      </div>
      <div class="selection limited">
        <div class="countDown">
          <div class="left">
            <span>专题精选</span>
          </div>
          <a href="javascript:;" class="right">
            <span>更多</span>
            <i class="iconfont icon-youjiantou"></i>
          </a>
        </div>
        <div class="swiper_selection">
          <div class="swiper-container">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/e8f232c7b25fd412afbdf4ba785e1f0d.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75">
                </a>
                <p class="p1">2019明前春茶新鲜上市, 尝过这一口, 才算不辜负春天</p>
                <p class="p2">把整个春天，酿成明前一杯茶</p>
              </li>
              <li class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/14768501c61c5b91830d884f08822b93.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75">
                </a>
                <p class="p1">20块在严选能买到什么了不得的宝贝？快戳！最低只要2.9</p>
                <p class="p2">小零食|个护美妆|纸品清洁，高性价比凑单王</p>
              </li>
              <li class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/e5e9a59b218ac8eb238e125bc30e9f3d.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75">
                </a>
                <p class="p1">开发半年的神仙杯子, 半天抢光。问我感想, 我说太假了</p>
                <p class="p2">星愿双层玻璃杯，高调回归！</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div class="crowd limited">
        <div class="countDown">
          <div class="left">
            <span>品牌制造商直供</span>
          </div>
          <a href="javascript:;" class="right">
            <span>更多</span>
            <i class="iconfont icon-youjiantou"></i>
          </a>
        </div>
        <div class="crowd_detail">
          <a href="javascript:;">
            <div class="imgWrap">
              <img src="https://yanxuan.nosdn.127.net/534bd66101b746846fabb4bc452d957a.png?imageView&thumbnail=210x210&quality=75">
            </div>
            <div class="content">
              <p class="title">诸事如意猪猪壶</p>
              <div class="price">
                <span>￥588</span>
                <span class="qi">起</span>
              </div>
              <div class="percentage">
                <div class="percentageLine">
                  <div class="on" style="width: 20%"></div>
                </div>
                <p>22%</p>
              </div>
              <p class="support">26人已支持</p>
            </div>
          </a>
          <a href="javascript:;">
            <div class="imgWrap">
              <img src="https://yanxuan.nosdn.127.net/ea88d65bfa8541c3eeb2ca7947fb9366.png?imageView&thumbnail=210x210&quality=75">
            </div>
            <div class="content">
              <p class="title">2019年明前特级龙井礼盒 100克</p>
              <div class="price">
                <span>￥368</span>
                <span class="qi">起</span>
              </div>
              <div class="percentage">
                <div class="percentageLine">
                  <div class="on" style="width: 100%"></div>
                </div>
                <p>969%</p>
              </div>
              <p class="support">362人已支持</p>
            </div>
          </a>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="scrollCategory">
      <div class="categoryA">
        <div class="banner">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/61057b244c63dec382afb5385f0d4270.jpg?imageView&thumbnail=750x0&quality=75">
          </a>
        </div>
        <div class="categoryA_swiper">
          <div class="swiper-container">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <a href="javascript:;">
                  <div class="titleBanner">
                    <img src="http://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png?imageView&quality=65&thumbnail=330x330">
                  </div>
                  <div class="bannerDetail">
                    <span>AB面独立弹簧床垫 进口乳胶</span>
                  </div>
                  <div class="price">
                    <p class="nowPrice">￥2599</p>
                  </div>
                  <div class="tag">
                    <p class="tag_P">券</p>
                  </div>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="javascript:;">
                  <div class="titleBanner" style="background: #f4f4f4">
                    <img src="http://yanxuan.nosdn.127.net/7c100387e5b3d55773a196c4d1ccc9e4.png?imageView&quality=65&thumbnail=330x330">
                  </div>
                  <div class="bannerDetail">
                    <span>破壁机/冷热双杯</span>
                  </div>
                  <div class="price">
                    <p class="nowPrice">￥599</p>
                    <p class="oldPrice">￥699</p>
                  </div>
                  <div class="priceDetail">
                    <p class="priceDetail_P">女王节特惠</p>
                    <p class="priceDetail_P">满赠</p>
                  </div>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="javascript:;">
                  <div class="titleBanner" style="background: #f4f4f4">
                    <img src="http://yanxuan.nosdn.127.net/6c81c70f7a6887b73668e5fbe58f2b61.png?imageView&quality=65&thumbnail=330x330">
                  </div>
                  <div class="bannerDetail">
                    <span>升级款双宫茧桑蚕丝被 子母被</span>
                  </div>
                  <div class="price">
                    <span class="nowPrice">￥1376</span>
                    <span class="oldPrice">￥1449</span>
                  </div>
                  <div class="priceDetail">
                    <p class="priceDetail_P">女王节特惠</p>
                  </div>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="javascript:;">
                  <div class="titleBanner" style="background: #f4f4f4">
                    <img src="http://yanxuan.nosdn.127.net/fb53b989d34b32366f138b5e563ccd0a.png?imageView&quality=65&thumbnail=330x330">
                  </div>
                  <div class="bannerDetail">
                    <span>升级款95%白鹅绒秋冬加厚羽绒被</span>
                  </div>
                  <div class="price">
                    <p class="nowPrice">￥896</p>
                  </div>
                  <div class="priceDetail">
                    <p class="priceDetail_P">女王节特惠</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <a href="#" class="toTop" v-show="showTop">
      <span class="iconfont icon-shang"></span>
    </a>
    <footer>
      <div class="footerWarp">
        <div class="cli">
          <a href="javascript:;" class="download">下载APP</a>
          <a href="javascript:;" class="download">电脑版</a>
        </div>
        <div class="detail">
          <p>网易公司版权所有 © 1997-2019</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import Bscroll from 'better-scroll'
  export default {
    data(){
      return{
        showTop:'',
        showTab:false,

      }
    },
    mounted () {
      new Swiper('.slideshow .swiper-container',{
        loop: true,
        autoplay: true,
        pagination: {
          el: '.slideshow .swiper-pagination',
          clickable:true
        },
      })
      new Swiper('.swiperTwo .swiper-container',{
        loop: true,
        //autoplay: true,
        pagination: {
          el: '.swiperTwo .swiper-pagination',
          clickable:true
        },
      })
      new Swiper('.swiper_selection .swiper-container',{
        //loop: true,
        slidesPerView: 'auto',
      })
      new Swiper('.categoryA_swiper .swiper-container',{
        //loop: true,
        slidesPerView: 'auto',
      })

      new Bscroll('.navTab .nav', {
        click:true,
        scrollX:true
      })
      window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
      // handleScroll() {
      //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //   let offsetTop = document.querySelector('#classifyNav').offsetTop
      //   scrollTop > offsetTop?this.showTop = true:this.showTop = false
      // },
      showTabList(){
        this.showTab=!this.showTab
      }
    }
   }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .warp
    padding-bottom 1.30667rem;
    .line
      width 100%
      height .26667rem
      background: #F5F5F5
    header
      height 148px
      .top
        position: fixed!important;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%;
        .show
          background-color: #fff;
          border-bottom: 1px solid #d9d9d9;
          .search
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            background: #fff;
            padding: .21333rem .4rem;
            .logo
              width: 1.84rem;
              height: .53333rem;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
              display: inline-block;
              margin-right: .26667rem;
              background-size: cover;
              background-position: center;
            .searchInput
              flex-grow: 1;
              display: flex;
              flex-flow: row nowrap;
              -webkit-box-align: center;
              align-items: center;
              -webkit-box-pack: center;
              justify-content: center;
              height: .74667rem;
              font-size: .37333rem;
              background-color: #ededed;
              border-radius: .10667rem;
              .icon
                display: inline-block;
                vertical-align: middle;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                width: .37333rem;
                height: .37333rem;
                margin-right: .13333rem;
              .placeholder
                color #666
            .loginBtn
              width: .98667rem;
              height: .53333rem;
              line-height: .53333rem;
              text-align: center;
              color: #b4282d;
              border: 1px solid #b4282d;
              border-radius: .10667rem;
              margin-left: .21333rem;
              font-size: .32rem;
          .navTab
            position: relative;
            z-index: 2;
            background: #fff;
            margin-top: -.01333rem;
            .nav
              padding-right: 1.33333rem;
              width 100%
              //overflow hidden
              ul
                display flex
                width 1000px
                padding-left .4rem
                li
                  display: inline-block;
                  padding: 0 .21333rem;
                  line-height: .8rem;
                  font-size: .37333rem;
                  color: #333;
                  text-align: center;
                  margin-left .26667rem;
                  &:first-child
                    margin-left 0
                .active
                  border-bottom 3px solid #b4282d
            .toggleNav
              display: flex;
              flex-grow: 0;
              justify-content: center;
              position: absolute;
              top: 0;
              right: 0;
              .linear
                width: .8rem;
                height: .8rem;
                background-image: linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);
              .toggle
                width: 1.33333rem;
                height: .8rem;
                text-align: center;
                background: #fff;
                display flex
                align-items center
                justify-content center
                /*.iconfont*/
                  /*font-size .4rem*/
                  /*color #666*/
                .icon
                  margin-top: .02rem;
                  display: inline-block;
                  vertical-align: middle;
                  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png);
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                  width: .4rem;
                  height: .4rem;
                  transition transform .5s
                  &.rotateShow
                    transform rotate(180deg)
            .other
              height: .8rem;
              line-height: .8rem;
              padding-left: .4rem;
              font-size: .37333rem;
            .otherList
              padding-top: .32rem;
              overflow hidden
              li
                width: 2rem;
                height: .74667rem;
                line-height: .74667rem;
                text-align: center;
                float: left;
                margin-bottom: .53333rem;
                margin-left: .4rem;
                background: #FAFAFA;
                border: 1px solid #b4282d;
                color: #333;
                border-radius: .05333rem;
                font-size .32rem
              .active
                color #b4282d;
          .mask
            position: fixed;
            z-index: 1;
            background: rgba(0,0,0,.5);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
    .slideshow
      height 4.93333rem;
      background: #ccc;
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            position relative
            img
              width: 100%;
              height: auto;
              position: absolute;
              left: 0;
              top: -.2rem
        .swiper-pagination
          width 100%
          bottom .4rem
          .swiper-pagination-bullet
            width: .53333rem;
            height: .05333rem;
            display: inline-block;
          .swiper-pagination-bullet-active
            opacity: 1;
            background: #fff;
            border-radius: 0;
    .explain
      background-color: #FFFFFF;
      color: #B4282D;
      ul
        display flex
        width: 100%;
        height: .96rem;
        padding: 0 .4rem;
        align-items: center;
        justify-content space-around
        li
          align-items center
          display flex
          a
            align-items center
            color #B4282D
            .iconfont
              font-size .42667rem
              float left
            span
              font-size: .32rem;
              margin-left: .10667rem;
              line-height: .42667rem;
              display: inline-block;
              vertical-align: middle;
              float left
    #classifyNav
      width 100%
      height 5.22667rem
      ul
        padding-bottom: .69333rem
        height 100%
        display flex
        flex-wrap wrap
        li
          width: 1.46667rem;
          height: 2.08rem;
          float: left;
          margin: .13333rem .26667rem .12rem .26667rem
          a
            display flex
            flex-direction column
            align-items center
          img
            width: 1.46667rem;
            height: 1.46667rem;
            display block
          span
            color: #333333
            margin-top: .13333rem;
            text-align: center;
            font-size: .32rem;
            line-height: .48rem;
            white-space: nowrap

    .activity
      .nowActivity
        .womanDay
          width: 10rem;
          height: 2.6222222222222222rem;
          background: url(https://yanxuan.nosdn.127.net/15518754018120930.png?imageView&crop=0_0_750_295&quality=75);
          background-size: 100% 100%;
          a
            display inline-block
            width: 100%;
            height: auto;
        .anyActivity
          width: 10rem;
          height: 2.7111111111111112rem;
          background: url(https://yanxuan.nosdn.127.net/15518754018120930.png?imageView&crop=0_295_750_305&quality=75);
          background-size: 100% 100%;
          ul
            display flex
        .bg1
          width: 100%;
          height: 0.2rem;
          background: url(https://yanxuan.nosdn.127.net/15518754018120930.png?imageView&crop=0_600_750_15&quality=75);
          background-size: 100% 100%;
        .bg2
          width: 100%;
          height: 0.2rem;
          background: url(https://yanxuan.nosdn.127.net/15518754018120930.png?imageView&crop=0_615_750_15&quality=75);
          background-size: 100% 100%;
      .koala
        img
          width 100%
          height 100%
      .shopGuide
        background: #fff
        overflow: hidden;
        padding: .13333rem .4rem .4rem .34667rem;
        ul
          display flex
          flex-wrap wrap
          li
            a
              background-size: 100% 100%;
              background-color: #F5F5F5;
              display: block;
              width: 4.57333rem;
              height: 3.52rem;
              float: left;
              margin: .05333rem 0 0 .05333rem;
              padding: .26667rem 0 0 .26667rem;
              border-radius: .05333rem
              .text-title
                padding-left: .13333rem;
                font-size: .42667rem;
                font-family: PingFangSC-Medium;
                color: #333333
                margin .1rem 0 .2rem 0
              .text-detail
                padding-left: .13333rem;
                font-size: .32rem;
                color: #7f7f7f;
              div
                width 100%
                img
                  width: 2rem;
                  height: 2rem;
                  float: left;
                  margin-right: .05333rem;
      .private
        .title
          width: 100%;
          height: 1.33333rem;
          line-height: 1.33333rem;
          padding: 0 .4rem;
          background: #fff;
          overflow: hidden;
          span
            float: left;
            font-size: .42667rem;
            font-family: PingFangSC-Regular;
            color #333
        .swiperTwo
          position relative
          background-color: #fff;
          .swiper-container
            padding-bottom .8rem
            .swiper-pagination
              width: auto;
              left: 0;
              right 0;
              bottom: .32rem;
              height: .16rem;
              margin-bottom: 0;
              margin-right: 0;
              padding-right: 0;
              display flex
              justify-content center
              .swiper-pagination-bullet
                width: .16rem;
                height: .16rem;
                border-radius: 50%;
                //background: #D9D9D9;
                color #333
                border: none;
                vertical-align: middle;
              .swiper-pagination-bullet-active
                background: #b4282d;
            .swiper-wrapper
              height auto
              .swiper-slide
                li
                  padding: 0!important;
                  margin-left: .26667rem;
                  width: 2.88rem;
                  float: left;
                  a
                    display: block;
                    color: #333;
                    .img
                      background-color: #f5f5f5
                      margin-bottom: .16rem;
                      width: 2.88rem;
                      height: 2.88rem;
                      img
                        display block
                        background-color: #f5f5f5;
                        top: 0;
                        left: 0;
                        width: 2.88rem;
                        height: 2.88rem;
                    .content
                      margin-top: 0;
                      margin-bottom: .13333rem;
                      padding: 0 .13333rem;
                      font-size: .32rem;
                      overflow: visible;
                      white-space: normal;
                      line-height: .48rem;
                      span
                        font-size: .32rem;
                        white-space: normal;
                        line-height: .48rem;
                        color #333
                      .price
                        color #b4282d;
                    .specification
                      position: absolute;
                      border-width: .5px;
                      border-radius: .02667rem;
                      border-style: solid;
                      border-color: #b4a078;
                      width: .42667rem;
                      background: #f4f4f4;
                      top: 0;
                      margin-top: .13333rem;
                      margin-left: .13333rem;
                      padding: .16rem 0;
                      color: #b4a078;
                      display: flex;
                      flex-direction column
                      justify-content center
                      span
                        font-size: .26667rem;
                        text-align: center;
                        line-height: 1;

      .limited
        .countDown
          width: 100%;
          height: 1.33333rem;
          line-height: 1.33333rem;
          padding: 0 .4rem;
          background: #fff;
          overflow: hidden;
          .left
            float: left;
            font-size: .42667rem;
            display flex
            align-items center
            justify-content center
            div
              font-size 0
              display flex
              align-items center
              padding-left  .16rem
              .time
                display: inline-block;
                font-size: .32rem;
                line-height: .48rem;
                width: .48rem;
                height: .48rem;
                text-align: center;
                background-color: #333;
                border-radius: .05333rem;
                color: #fff;
                margin: 0 .13333rem;
              .dot
                font-size: .37333rem;


          .right
            float right
            font-size: .37333rem;
            color: #333;
            line-height: 1.33333rem;
            display flex
            .iconfont
              font-size .4rem
        .ctList
          display flex
          padding: 0 .13333rem 0 .4rem;
          flex-wrap wrap
          li
            a
              color: #333;
              margin-right: .26667rem;
              padding-bottom: .4rem;
              display flex
              flex-direction column
              img
                width: 2.88rem;
                height: 2.88rem;
                background: #F5F5F5;
                border-radius: 4px;
                margin-bottom: .16rem;
              div
                display flex
                justify-content center
                span
                  font-size: .37333rem;
                  color: #b4282d;
                  margin-right: .16rem;
                .oldPrice
                  font-size: .32rem;
                  color: #7F7F7F;
                  text-decoration: line-through;
        .newList
          display flex
          flex-wrap wrap
          .popularityCatg
            color: #333;
            width: 9.2rem;
            height: 3.73333rem;
            align-items: center;
            background: #FEF0DF;
            border-radius: .05333rem;
            margin: 0 .4rem .26667rem;
            display flex
            .bannerItem
              width: 3.73333rem;
              height: 3.73333rem;
              background: url(https://yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png);
              background-size: 100% 100%;
              margin-right: .4rem;
              img
                display inline-block
                width: 100%;
                height: auto;
            .detailItem
              font-size .37333rem;
              .one
                //width: 4.66667rem;
                display inline-block
                padding: 0 .10667rem;
                margin: 0 0 .16rem;
                height: .41333rem;
                color: #B4282D;
                border: 1px solid #B42
                background: rgba(255,255,255,.9);
                font-size: .26667rem;
                text-align center
                line-height: .37333rem;
              .two
                font-size: .37333rem;
              .three
                font-size .32rem
                line-height .7rem
                color #7F7F7F;
              .price
                font-size: .37333rem;
                color: #b4282d;
          .name
            padding: 0 0 .17333rem!important;
            width: 2.88rem;
            margin-left: .26667rem;
            position relative
            display flex
            flex-direction column
            .good
              width 100%
              img
                width: 2.88rem;
                height: 2.88rem;
                background: #F5F5F5;
                border-radius: 4px;
                margin-bottom: .16rem;
                display block
              .detailAndPrice
                margin-top: 0;
                margin-bottom: .05333rem;
                padding: 0;
                font-size: .32rem;
                overflow: visible;
                display inline-block
                .detail
                  font-size .32rem;
                  color #333
                  white-space: normal;
                  line-height: .48rem;
                .oldPrice
                  text-decoration none
                  color: #b4282d;
              .priceDetail
                display flex
                justify-content flex-start
                p
                  padding: 0 .10667rem;
                  height: .4rem;
                  line-height: .37333rem;
                  text-align: center;
                  color: #B4282D;
                  border: 1px solid #B4282D;
                  font-size: .26667rem;
                  border-radius: .02667rem;
            .specification
              position: absolute;
              border-width: .5px;
              border-radius: .02667rem;
              border-style: solid;
              border-color: #b4a078;
              width: .42667rem;
              background: #f4f4f4;
              top: 0;
              margin-top: .13333rem;
              margin-left: .13333rem;
              padding: .16rem 0;
              color: #b4a078;
              display: flex;
              flex-direction column
              justify-content center
              span
                font-size: .26667rem;
                text-align: center;
                line-height: 1;


      .hot
        .hotContent
          padding: 0 .26667rem .26667rem .4rem;
          .topTwo
            display flex
            a
              width: 4.53333rem;
              height: 2.66667rem;
              border-radius: .05333rem;
              margin: 0 .13333rem .13333rem 0;
              position relative
              background: #F9F3E4;
              .hotLeft
                position relative
                margin .95rem 0 0 .32rem
                display flex
                span
                  font-size: .37333rem;
                  color #333;
              .hotItem
                &::before
                  content: '';
                  position: absolute;
                  left: 0;
                  bottom: -.3rem;
                  width: .64rem;
                  height: .05333rem;
                  background: #333
              img
                position absolute
                top: 0
                right: 0
          ul
            display flex
            flex-wrap wrap
            li
              width: 2.2rem;
              height: 2.4rem;
              background: #F5F5F5;
              border-radius: .05333rem;
              margin: 0 .13333rem .13333rem 0;
              display flex
              a
                width: 2.2rem;
                height: 2.4rem;
                display flex
                flex-direction column
                justify-content space-around
                align-items center
                p
                  font-size: .32rem;
                  color: #333;
                  font-family: PingFangSC-Medium;
                img
                  width: 1.6rem;
                  height: 1.6rem;

      .welfare
        padding: .4rem .34667rem .34667rem .4rem;
        background: #fff;
        overflow: hidden;
        margin-bottom: .26667rem;
        ul
          display flex
          flex-wrap wrap
          li
            display: block;
            color: #333;
            width: 4.57333rem;
            height: 2.93333rem;
            float: left;
            border-radius: .05333rem;
            margin: 0 .05333rem .05333rem 0;
            font-size: .32rem;
            padding: .26667rem 0 0 .4rem;
            position relative
            &:nth-child(1)
              background: url("https://yanxuan.nosdn.127.net/dc4bbc16d3946fddb71382f8132210b9.png?imageView&thumbnail=343x220&quality=75")
              background-size: 100% 100%;
            &:nth-child(2)
              background: url("https://yanxuan.nosdn.127.net/fccd022ad6cbf158a6e2cb694f7a281a.png?imageView&thumbnail=343x220&quality=75")
              background-size: 100% 100%;
            &:nth-child(3)
              background-image: url(http://yanxuan.nosdn.127.net/f27c3ec2a30b64debc57285b76c4d03d.png?imageView&thumbnail=343x220&quality=75);
              background-size: 100% 100%;
            &:nth-child(4)
              background-image: url(http://yanxuan.nosdn.127.net/807ed8cee518d6730180b48484f01ff2.png?imageView&thumbnail=343x220&quality=75);
              background-size: 100% 100%
            a
              .modleAndPrice
                position: absolute;
                right: 0;
                top: 0;
                img
                  width: 2.66667rem;
                  height: 2.66667rem;
                .discount
                  position: absolute;
                  top: .4rem;
                  right: .45333rem;
                  width: 1.06667rem;
                  height: 1.06667rem;
                  opacity: .8;
                  background: #F59524;
                  border-radius: 50%;
                  padding-top: .13333rem;
                  color: #fff;
                  display flex
                  flex-direction column
                  justify-content center
                  align-items center
                  .now
                    font-size .32rem
                  .old
                    font-size: .26667rem;
                    text-decoration: line-through;
              .content
                position absolute
                p
                  &:nth-child(1)
                    font-size: .42667rem;
                    color: #333;
                  &:nth-child(2)
                    color: #7F7F7F;
                    margin .15rem 0
                  &:nth-child(3)
                    color #b4282d
                .tag
                  position: relative;
                  display: inline-block;
                  padding: 0 .13333rem;
                  height: .42667rem;
                  background: #CBB693;
                  border-radius: .05333rem;
                  color: #fff;
                  font-size: .29333rem;
                  line-height: .42667rem;
                  text-align: center;
      .made
        .newList
          position: relative;
          overflow: hidden;
          background: #fff;
          margin-bottom: .26667rem;
          padding: 0 .34667rem .34667rem .4rem;
          .name
            display: inline-block;
            position: relative;
            margin: 0 .05333rem .05333rem 0;
            width: 4.57333rem;
            height: 3.46667rem;
            overflow: hidden;
            background-color: #f4f4f4;
            border-radius: .05333rem;
            &:nth-child(1)
              background-image: url(http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
              background-size: 100% 100%;
            &:nth-child(2)
              background-image: url(http://yanxuan.nosdn.127.net/f0ab529d1d34b61357889029793e1086.png?imageView&thumbnail=343y260&enlarge=1)
              background-size: 100% 100%;
            &:nth-child(3)
              background-image: url(http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1)
              background-size 100% 100%
            &:nth-child(4)
              background-image: url(http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1)
              background-size: 100% 100%;
            .detail
              padding-top: .30667rem;
              width: 100%;
              z-index: 4;
              text-align: center;
              display flex
              flex-direction column
              align-items center
              p
                color: #333;
                font-family: PingFangSC-Medium;
                font-size: .37333rem;
                line-height: .45333rem;
                margin-bottom: .04rem;
              .price
                display flex
                span
                  color: #7F7F7F;
                  font-size: .32rem;
                .new
                  display: inline-block;
                  width: .85333rem;
                  height: .42667rem;
                  color: #fff;
                  line-height: .42667rem;
                  text-align: center;
                  background: #CBB693;
                  border-radius: .05333rem;
                  margin-left: .13333rem;
                  font-size .32rem

      .selection
        .swiper_selection
          padding: 0 .4rem .4rem;
          overflow: hidden;
          .swiper-container
            .swiper-wrapper
              height 378px
              .swiper-slide
                margin-right: 31.2667px;
                background: #F5F5F5;
                width: 6.4rem;
                padding-bottom: .32rem;
                a
                  display: block;
                  width: 6.4rem;
                  height: 3.56rem;
                  margin-bottom: .21333rem;
                  overflow: hidden;
                  img
                    width: 100%;
                    height: auto;
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                .p1
                  font-family: PingFangSC-Medium;
                  font-size: .37333rem;
                  color #333
                  text-overflow: ellipsis;
                  width: 5.46667rem;
                  white-space: nowrap;
                  overflow: hidden;
                  padding: .18rem .26667rem;
                .p2
                  font-size: .32rem;
                  color: #7F7F7F;
                  padding: 0 .26667rem;
      .crowd
        .crowd_detail
          border-top: 1px solid #D8D8D8;
          padding-bottom: .4rem;
          a
            display flex
            align-items: center;
            padding: .4rem .4rem 0;
            color: #333;
            .imgWrap
              margin-right: .4rem;
              background: #f4f4f4;
            .content
              font-size: .37333rem;
              .title
                width: 6rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-family: PingFangSC-Medium;
              .price
                font-family: PingFangSC-Regular;
                font-size: .42667rem;
                color: #b4282d;
                .qi
                  font-size: .32rem;
              .percentage
                position: relative;
                border-radius: .04rem;
                .percentageLine
                  width: 4.8rem;
                  height: .08rem;
                  background: #D8D8D8;
                  border-radius: .04rem;
                  overflow: hidden;
                  position: relative;
                  margin-top: .29333rem;
                  .on
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    background-color: #FEA438;
                p
                  position: absolute;
                  right: 0;
                  top: -.15rem;
                  font-size: .32rem;
                  color: #7F7F7F;
                  font-family: PingFangSC-Medium;
              .support
                margin-top: .2rem;
                font-size: .32rem;
                color: #7F7F7F;

    .scrollCategory
      .categoryA
        .banner
          margin-bottom: .26667rem;
          a
            img
              display: block;
              width: 100%;
              height: 4.93333rem;
              margin-bottom: .26667rem;

        .categoryA_swiper
          .swiper-container
            height: auto;
            padding: 0 .4rem .4rem;
            .swiper-wrapper
              height auto
              .swiper-slide
                //padding: 0!important;
                margin-right: .26667rem;
                width: 2.66667rem;
                height: auto;
                a
                  .titleBanner
                    width 100%
                    margin-bottom: .16rem;
                    img
                      width 100%
                      height auto
                      display block
                  .bannerDetail
                    font-size: .32rem;
                    margin-top: 0;
                    line-height: .48rem;
                    overflow: hidden;
                    white-space: normal
                    color: #333
                  .price
                    display flex
                    .nowPrice
                      margin-bottom: .05333rem;
                      font-size: .32rem;
                      line-height: .48rem;
                      color: #b4282d;
                      display inline-block
                    .oldPrice
                      margin-left: .10667rem;
                      font-size: .32rem;
                      line-height: .48rem;
                      color: #999;
                      text-decoration: line-through;
                      font-family: PingFangSC-Light;
                  .tag
                    width: 100%;
                    z-index: 1;
                    margin: 0 0 .05333rem;
                    height: .41333rem;
                    overflow: hidden;
                    padding-left: 0;
                    text-align: left;
                    .tag_P
                      background: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/coupon-tag-77f3e7728a.png) no-repeat;
                      background-size: 100% 99%;
                      padding: 0 .17333rem;
                      line-height: .4rem;
                      overflow: hidden;
                      border: none;
                      height: .4rem;
                      text-align: center;
                      font-size: .26667rem;
                      display: inline-block;
                      vertical-align: middle;
                      float left
                  .priceDetail
                    display flex
                    justify-content flex-start
                    .priceDetail_P
                      padding: 0 .10667rem;
                      height: .4rem;
                      line-height: .37333rem;
                      text-align: center;
                      color: #B4282D;
                      border: 1px solid #B4282D;
                      font-size: .26667rem;
                      border-radius: .02667rem;
                      margin-right .10667rem
    footer
      border-top: 1px solid rgba(0,0,0,.15);
      background-color: #414141;
      .footerWarp
        text-align: center;
        padding: .72rem .26667rem .37333rem;
        .cli
          width 100%
          display flex
          justify-content center
          .download
            margin-right: .66667rem;
            width: 2.29333rem;
            font-size: .32rem;
            color: #fff;
            height: .82667rem;
            line-height: .82667rem;
            border: 1px solid #999;
            display: inline-block;
            &:nth-child(2)
              margin-right 0
        .detail
          margin-top: .48rem;
          font-size: .32rem;
          line-height: .42667rem;
          color: #999;
    .toTop
      width: 1.09333rem;
      height: 1.09333rem;
      border-radius 50%
      display flex
      align-items center
      justify-content center
      position: fixed;
      right: .30667rem;
      bottom: 1.6rem;
      background rgba(255,255,255,.7)
      span
        font-size .6rem
</style>
