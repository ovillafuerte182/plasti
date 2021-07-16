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
        { value: 'Grupo Impresoras MREF', text: 'Grupo Impresoras MREF' },
        { value: 'Grupo Administrativo', text: 'Grupo Administrativo' },
        { value: { C: 'Grupo Ingenierias' }, text: 'Grupo Ingenierias' },
        { value: 'Grupo Apoyo', text: 'Grupo Apoyo', disabled: true },
      ],
      codeBasic,
    }
  },
}
</script>
