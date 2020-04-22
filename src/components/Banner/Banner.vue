<template>
  <div class="swiper-container" ref="banner">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'yh-banner',
  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    const _this = this
    /* eslint-disable */
    new Swiper(this.$refs.banner, {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: this.loop,
      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true
      } : false,
      on: {
        slideChangeTransitionEnd: function () {
          _this.$emit('change', this.realIndex)
        }
      }
    })
    /* eslint-enable */
  }
}
</script>

<style lang="scss">
.swiper-container{
  width: 100%;
  height: 180px;
  .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: hsla(0, 0%, 100%, 0.7);
  }
  .swiper-pagination-bullet-active {
    width: 20px;
    height: 10px;
    background: url('~@/assets/icon/dot.png') no-repeat 50%;
    background-size: 100%;
    z-index: 10;
  }
}
</style>
