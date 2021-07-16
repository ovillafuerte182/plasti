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
        { value: null, text: 'Seleccione una opción' },
        { value: 'Cali', text: 'Cali' },
        { value: 'Palmira', text: 'Palmira' },
        { value: 'Buga', text: 'Buga' },
        { value: 'd', text: 'Candelaria', disabled: true },
      ],
      codeBasic,
    }
  },
}
</script>
