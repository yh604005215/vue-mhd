<template>
  <section class="index-recommend">
    <div class="recommend-divide"></div>
    <div class="recommend-title">
        <div class="title-group">
            <img class="title-icon" :src="item.icon">
            <span class="title-text font-36">{{ item.name }}</span>
        </div>
        <span class="title-more font-24">更多 &gt;</span>
    </div>
    <div v-if="item.comicsviewtype === 1" class="recommend-type-1">
        <div class="item" v-for="data in item.comicslist" :key="data.bigbook_id">
            <img class="item-pic" :src="JSON.parse(data.extension).xsyzfx">
            <p class="item-name font-28">{{ data.bigbook_name }}</p>
            <p class="item-text font-24">
              {{ JSON.parse(data.extension).recommendwords }}
            </p>
        </div>
    </div>
    <div v-if="item.comicsviewtype === 5" class="recommend-type-5">
      <div class="item"  v-for="data in item.comicslist" :key="data.bigbook_id">
          <img class="item-pic" :src="data.coverurl">
          <p class="item-title font-28">{{ data.bigbook_name }}</p>
          <p class="item-text font-24">悬疑,热血,玄幻</p>
      </div>
    </div>

    <div v-if="item.comicsviewtype === 3" class="recommend-type-3">
      <div class="item" v-for="(data, index) in item.comicslist" :key="data.bookstore_id">
          <img class="item-pic"
          :src=" JSON.parse(data.extension).scfk344_202" />
          <div class="ranking-group">
              <div :class="`item-ranking item-ranking-${index + 1}`"></div>
          </div>
          <div class="text-group">
              <p class="item-name font-30">{{ data.bigbook_name }}</p>
              <p class="item-hot font-24">人气：<span class="hot-hot">{{ data.clickratelong | formatYi }}</span></p>
              <p class="item-text font-24">{{ data.brief }}</p>
          </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      classfiy: []
    }
  },
  props: {
    item: {
      type: Object,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.index-recommend {
  .recommend-divide {
    height: 10px;
    background: #f4f4f4;
  }
  .recommend-title {
    display: flex;
    align-items: center;
    margin: 23px 0 19px 0;
    position: relative;
    justify-content: center;
    img {
      height: 22px;
      width: 22px;
      vertical-align: middle;
    }
    .title-text {
      font-size: 18px;
      color: #3a3a3a;
      font-weight: 500;
    }
    .title-more {
      font-size: 12px;
      color: #b0b0b0;
      position: absolute;
      right: 10px;
    }
  }
  .recommend-type-1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px;
     .item {
    width: 173px;
    margin-bottom: 11px;
    .item-pic {
      height: 173px;
      width: 173px;
      margin-bottom: 5px;
    }
    .item-name {
      color: #3a3a3a;
      overflow: hidden;
      max-width: 100%;
      font-size: 12px;
      height: 18.5px;
      margin-bottom: 3px;
    }
    .item-text {
      overflow: hidden;
      max-width: 100%;
      font-size: 12px;
      color: #8d8d8d;
      height: 15.5px;
    }
    }
  }
  .recommend-type-5 {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: center;
    align-content: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding: 10px;
    .item {
      width: 111px;
      margin-bottom: 8px;
      .item-pic {
        height: 148px;
        width: 100%;
        margin-bottom: 5px;
      }
      .item-title {
        max-width: 100%;
        color: #3a3a3a;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;
        margin-bottom: 5px;
      }
      .item-text {
        max-width: 100%;
        color: #8d8d8d;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 12px;
      }
    }
  }

  .recommend-type-3 {
    box-sizing: border-box;
    padding: 0 10px;
    .item {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 100%;
      position: relative;
      margin-bottom: 20px;
      .item-pic {
        height: 90px;
        width: 153px;
      }
      .text-group {
        width: 158px;
        margin-left: 43px;
        .item-name {
          font-size: 16px;
          color: #3a3a3a;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .item-hot {
          font-size: 12px;
          color: #b0b0b0;
           margin-bottom: 15px;
          span {
            color: red;
          }
        }
        .item-text {
          font-size: 12px;
          max-width: 100%;
          color: #8d8d8d;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
  .ranking-group{
    .item-ranking {
      position: absolute;
      width: 25px;
      height: 25px;
      left: 168px;
      top: 3.5px;
      background-repeat: no-repeat;
      background-position: top;
      background-size: contain;

    }
  }
  $imgUrl: '~@/assets/icon/one.png',
  '~@/assets/icon/two.png',
  '~@/assets/icon/three.png',
  '~@/assets/icon/four.png',
  '~@/assets/icon/five.png';

  @each $img in $imgUrl {
    $i:index($imgUrl,$img);
    .item-ranking-#{$i} {
      background-image: url($img)
    }
  }

}
</style>
