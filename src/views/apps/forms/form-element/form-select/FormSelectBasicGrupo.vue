<template>
  <b-card-code title="Grupos">
    <b-card-text>
      <span>Seleccione el grupo.</span>
    </b-card-text>

    <div>
      <b-form-select
        v-model="selected"
        :options="options"
      />
      <div class="mt-1">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </div>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSelect, BCardText } from 'bootstrap-vue'
import axios from 'axios'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BFormSelect,
    BCardText,
  },
  data() {
    return {
      selected: null,
      options: [
      ],
      codeBasic,
    }
  },
  mounted() {
    this.getGroups()
  },
  methods: {
    async getGroups() {
      const { data } = await axios.get('http://3.143.116.184:8080/cloudmessage/group/list')
      this.options = data.map(group => ({ value: group.group_id, text: this.$options.filters.capitalize(group.name) }))
      this.options.unshift({ value: null, text: 'Please select a group' })
    },
  },
}
</script>
