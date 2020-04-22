<template>
  <section class="banner" v-if="bannerList.length > 0">
    <yh-banner class="my-banner" :autoplay="3000">
      <yh-banner-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imageurl" alt="">
      </yh-banner-item>
    </yh-banner>
  </section>
</template>

<script>
import { yhBanner, yhBannerItem } from '@/components/Banner/index.js'
import { getBanner } from '@/api/carioon'
export default {
  name: 'HomeBanner',
  data () {
    return {
      bannerList: []
    }
  },
  components: {
    yhBanner,
    yhBannerItem
  },
  methods: {
    getBanner () {
      getBanner().then(res => {
        if (res.code === 200) {
          this.bannerList = res.info
        } else {
          console.log(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getBanner()
  }
}
</script>

<style lang="scss">
.my-banner img {
  width: 100%;
}
</style>
