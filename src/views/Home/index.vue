<template>
  <div class="page-mhd-home">
    <go-top />
    <header class="index-header">
    <a href="mine.html?cpid=0">
       <div class="header-user">
             <div class="user-btn"></div>
       </div>
    </a>
    <div class="header-logo"></div>
    <a href="search.html?cpid=0">
       <div class="header-search"></div>
    </a>
    </header>
    <section class="main">
      <HomeBanner />

      <HomeNav />

      <recommend v-for="item in classfiy" :key="item.id" :item="item"></recommend>

      <div class="my-icp">
        <a class="record" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006214" target="_blank">
            <img class="img" src="https://wechatapp.zhuishushenqi.com/mhd/201711/gongan.jpg">
            <div>沪公网安备 31011202006214号</div>
        </a>
        <div class="licence">增值电信业务经营许可证沪B2-20170022<br>网络文化经营许可证沪网文（2016）3206-227号<br>出版物经营许可证新出发沪批字第U7659号</div>
      </div>
    </section>
  </div>
</template>

<script>
import GoTop from '@/components/GoTop'
import { getClassCar } from '@/api/carioon'
import recommend from './recommend'
import HomeNav from './HomeNav'
import HomeBanner from './HomeBanner'

export default {
  name: 'Home',
  data () {
    return {
      classfiy: []
    }
  },
  components: {
    GoTop,
    recommend,
    HomeNav,
    HomeBanner
  },
  methods: {
    getClassCar () {
      getClassCar().then(res => {
        if (res.code === 200) {
          this.classfiy = res.info
          console.log(res.info[0].comicslist[0].extension)
        } else {
          console.log(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getClassCar()
  }
}
</script>

<style lang="scss" scoped>
.page-mhd-home {
  display: flex;
  flex-flow: column;
}
.main {
  flex: 1;
  overflow-y: scroll;
}
.index-header {
  height: 44px;
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  max-height: 65PX;
  .user-btn {
    height: 25px;
    width: 25px;
    background: url('~@/assets/icon/user-btn.png') no-repeat;
    background-size: 100%;
  }
  .header-logo {
    width: 93px;
    height: 28px;
    background: url('~@/assets/logo.png') no-repeat;
    background-size: 100%;
  }
  .header-search {
    height: 25px;
    width: 25px;
    background: url('~@/assets/icon/search.png') no-repeat;
    background-size: 100%;
  }
}

.my-icp {
  padding: 10px 0;
  .record {
    display: flex;
    justify-content: center;
    color: #333;
    font-size: 12px;
    img {
      height: 15px;
      width: 15px;
    }
  }
  .licence {
    color: #000;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
  }
}
</style>
