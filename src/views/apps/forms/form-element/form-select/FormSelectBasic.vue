<template>
  <b-card-code title="Planta">
    <b-card-text>
      <span>Seleccione la planta.</span>
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
    this.getFactories()
  },
  methods: {
    async getFactories() {
      const { data } = await axios.get('http://3.143.116.184:8082/sgpmes/factory/list')
      this.options = data.map(factory => ({ value: factory.factory_id, text: factory.name }))
      this.options.unshift({ value: null, text: 'Please select a factory' })
    },
  },
}
</script>
