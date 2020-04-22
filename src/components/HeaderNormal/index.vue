<template>
  <header class="header-normal">
    <div class="header-back"></div>
    <span class="header-title font-32"><slot /></span>
    <div class="header-search"></div>
  </header>
</template>

<script>
export default {
  name: 'header-normal'
}
</script>

<style lang="scss">
  .header-normal {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: #fff;
    position: relative;
    height: 45px;
    padding: 0 10px;
    .header-back {
      height: 13px;
      width: 23px;
      background: url('~@/assets/icon/header-back.png') no-repeat;
      background-size: 100%;
    }
    .header-title {
      max-width: 70%;
      color: #333;
      font-weight: 500;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 16px;
    }
    .header-search {
      height: 21px;
      width: 21px;
      background: url('~@/assets/icon/search-red.png') no-repeat;
      background-size: 100%;
    }
  }
</style>
