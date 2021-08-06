<template>
  <b-card title="">
    <b-row>
      <b-col lg="12">
        <b-card-code
          title="Grupos"
          class="border"
        >
          <b-card-text>
            <span>Seleccione los grupos que serán notificados.</span>
          </b-card-text>

          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            multiple
            label="title"
            :options="groupOptions"
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
import groupService from '@/services/groupService'
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
      groupOptions: [
        { title: 'Grupo1' },
        { title: 'Grupo2' },
        { title: 'Grupo3' },
        { title: 'Grupo4' },
        { title: 'Grupo5' },
      ],
    }
  },
  async created() {
    const data = await groupService.get()
    this.groupOptions = data.map(option => ({ title: option.text }))
  },
}
</script>
