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
import axios from 'axios'
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
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      const { data } = await axios.get('http://3.143.116.184:8080/cloudmessage/user/list/1')
      this.userOptions = data.map(user => ({ title: this.$options.filters.capitalize(`${user.name} ${user.last_name}`) }))
    },
  },
}
</script>
