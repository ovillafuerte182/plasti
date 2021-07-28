<template>
  <b-card-code title="Maquinarias">
    <b-card-text>
      <span>Seleccione la maquinaria.</span>
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
      options: [],
      codeBasic,
    }
  },
  mounted() {
    this.getMachines()
  },
  methods: {
    async getMachines() {
      const { data } = await axios.get('http://3.143.116.184:8082/sgpmes/machine/1')
      this.options = data.map(machine => ({ value: machine.machine_id, text: machine.name }))
      this.options.unshift({ value: null, text: 'Please select some machine' })
    },
  },
}
</script>
