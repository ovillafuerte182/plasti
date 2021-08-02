<template>
  <b-card title="">
    <b-row>
      <b-col lg="12">
        <b-card-code
          title="Usuarios"
          class="border"
        >
          <b-card-text>
            <span>Seleccione los usuarios que serán notificados.</span>
          </b-card-text>

          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            multiple
            label="title"
            :options="userOptions"
          />

          <template #code>
            {{ codeVueMultiBasic }}
          </template>
        </b-card-code>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import vSelect from 'vue-select'
import userService from '@/services/userService'
import {
  codeVueMultiBasic, codeVueMultiIcon, codeMultiPush, codeVueSelectionLimit, codeVueDir,
} from './code'

export default {
  components: {
    BRow,
    BCol,
    BCardText,
    BCard,
    BCardCode,
    vSelect,
  },
  data() {
    return {
      codeVueMultiBasic,
      codeVueMultiIcon,
      codeMultiPush,
      codeVueSelectionLimit,
      codeVueDir,
      dir: 'ltr',
      selected: [],
      userOptions: [],
    }
  },
  async created() {
    const data = await userService.get()
    this.userOptions = data.map(option => ({ title: option.text }))
  },
}
</script>
