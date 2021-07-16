<template>
  <b-row>
    <b-col cols="12">
      <form-wizard-icon />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import FormWizardIcon from './FormWizardIcon.vue'

export default {
  components: {
    BRow,
    BCol,
    FormWizardIcon,
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-wizard.scss';
  @import '@core/scss/vue/libs/vue-select.scss';
</style>
