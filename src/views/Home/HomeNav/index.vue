<template>
  <nav class="index-nav">
    <a href="classify.html?cpid=0">
        <div class="nav-item">
            <div class="nav-pic pic-1"></div>
            <p class="nav-text font-24">分类</p>
        </div>
    </a>
    <a href="ranking.html?cpid=0">
        <div class="nav-item">
            <div class="nav-pic pic-2"></div>
            <p class="nav-text font-24">排行</p>
        </div>
    </a>
    <a href="vip.html?cpid=0">
        <div class="nav-item">
            <div class="nav-pic pic-3"></div>
            <p class="nav-text font-24">VIP专区</p>
        </div>
    </a>
    <a href="history.html?cpid=0">
        <div class="nav-item">
            <div class="nav-pic pic-4"></div>
            <p class="nav-text font-24">历史</p>
        </div>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'HomeNav'
}
</script>

<style lang="scss">
.index-nav {
  height: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-item {
    .nav-pic {
      height: 55px;
      width: 55px;
      background-size: 100%;
    }
    .nav-text {
      width: 55px;
      height: 12px;
      font-size: 12px;
      text-align: center;
      margin-top: 5px;
      color: #8d8d8d;
      font-weight: 500;
    }
  }
}
$imgUrl: '~@/assets/img/home-classfiy.png','~@/assets/img/home-ranking.png','~@/assets/img/home-vip.png','~@/assets/img/home-history.png';

@each $img in $imgUrl {
   $i:index($imgUrl,$img);
  .pic-#{$i} {
    background-image: url($img)
  }
}

</style>
