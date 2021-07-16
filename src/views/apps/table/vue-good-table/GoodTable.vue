<template>
  <b-row>
    <b-col cols="12">
      <good-table-basic />
      <good-table-i18n />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import GoodTableBasic from './GoodTableBasic.vue'
import GoodTableI18n from './GoodTableI18n.vue'

export default {
  components: {
    BRow,
    BCol,
    GoodTableBasic,
    GoodTableI18n,
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
