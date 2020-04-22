<template>
  <div class="page-mhd-ranking">
    <headerNormal>排行榜</headerNormal>

    <header-type :types="types" @click="onTypeChange"></header-type>

    <div class="ranking-main">
      <cartoon-list :list="list"></cartoon-list>
    </div>
  </div>
</template>

<script>
import headerNormal from '@/components/HeaderNormal'
import headerType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'

import { getRankList } from '@/api/cartoon'
import { unformat } from '@/utils/decode'

export default {
  name: 'Ranking',
  components: {
    headerNormal,
    headerType,
    CartoonList
  },
  data () {
    return {
      // 找不到数据自己写吧
      types: [
        { id: 1, description: '热搜榜', ranktype: 6 },
        { id: 2, description: '人气榜', ranktype: 1 },
        { id: 3, description: '畅销榜', ranktype: 4 },
        { id: 4, description: '新书榜', ranktype: 2 },
        { id: 5, description: '完结榜', ranktype: 5 },
        { id: 6, description: '免费榜', ranktype: 3 }
      ],

      list: []
    }
  },
  methods: {
    getRankList (ranktype) {
      getRankList(ranktype).then(res => {
        if (res.code === 200) {
          // res.info 解密 JSON.parse 解析
          const info = JSON.parse(unformat(res.info))
          console.log(info.ranklist)
          this.list = info.ranklist
        } else {
          console.log(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    /**
     * 切换分类类型时，触发
     */
    onTypeChange (payload) {
      console.log(payload)
      const ranktype = payload.type.ranktype
      this.getRankList(ranktype)
    }
  },
  created () {
    this.getRankList(6)
  }
}
</script>

<style lang="scss" scoped>
  .main {
    flex: 1;
    overflow-y: auto;
  }
</style>
