<template>
  <div class="page-mhd-classify">
    <headerNormal>分类</headerNormal>
    <headerType :types="types" @click="onTypeChange"></headerType>
    <div class="main">
      <cartoon-list :list="list"></cartoon-list>
    </div>
  </div>
</template>

<script>
import { getTypes, getTypeList } from '@/api/cartoon'
import headerNormal from '@/components/HeaderNormal'
import headerType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
import { unformat } from '@/utils/decode'
export default {
  name: 'Classify',
  components: {
    headerNormal,
    headerType,
    CartoonList
  },
  data () {
    return {
      types: [],
      list: []
    }
  },
  methods: {
    getTypes () {
      return getTypes().then(res => {
        if (res.code === 200) {
          this.types = res.info
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getTypeList (subject) {
      getTypeList(subject).then(res => {
        if (res.code === 200) {
          // 对 res.info 做解密, 并解析成 JSON
          const info = JSON.parse(unformat(res.info))
          this.list = info.comicsList
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
      })
    },

    onTypeChange (payload) {
      const subject = payload.type.targetargument
      this.getTypeList(subject)
    }
  },
  async created () {
    await this.getTypes()
    this.getTypeList(this.types[0].targetargument)
  }
}
</script>

<style lang="scss" scoped>
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
