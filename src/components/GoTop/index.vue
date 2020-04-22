<template>
  <section class="go-top font-20">
    <div class="icon-arrow-up"></div>顶部
  </section>
</template>

<script>
export default {
  name: 'go-top'
}
</script>

<style lang="scss" scoped>
.go-top {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  text-align: center;
  position: fixed;
  z-index: 999;
  background-color: rgba(0,0,0,.5);
  font-size: 12px;
  color: #fff;
  right: 8px;
  bottom: 100px;
  .icon-arrow-up {
    width: 18px;
    height: 9px;
    background: url('~@/assets/icon/icon-arrow-up.png');
    margin: 10px auto 4px;
    background-size: 100%;
  }
}
</style>
