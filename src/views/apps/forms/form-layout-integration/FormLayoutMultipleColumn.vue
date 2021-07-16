<template>
  <b-card-code
    title="Crear Integración"
  >
    <b-form inline @submit.prevent>
      <b-row>
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-group label="Tipo Conexión" label-for="tipo_conexion">
          <b-form-select v-model="selected" :options="optionsConnect" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6"
      xl="3"
      class="mb-1">
           <b-form-input id="llave Privada" placeholder="llave Privada" />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6"
      xl="3"
      class="mb-1">
          <b-form-input id="llave Publica" placeholder="llave Publica" />
        </b-col>
      </b-row>
      <b-row>
      <b-row>
        <b-col md="6"
      xl="3"
      class="mb-1">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Generar
          </b-button>
        </b-col>
        </b-row>
      </b-row>
    </b-form>

    <template #code>
      {{ codeMultipleColumn }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BRow, BCol, BFormGroup, BFormInput, BButton, BForm, BFormSelect,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeMultipleColumn } from './code'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BForm,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeMultipleColumn,
      optionsCausa: [
        { value: '1', text: 'Causa 1' },
        { value: '2', text: 'Causa 2' },
      ],
      optionsConnect: [
        { value: null, text: 'Please select some conection' },
        { value: 'RestApi', text: 'Rest api' },
        { value: 'Sgp_mes_cliente', text: 'sgp mes-cliente' },
        { value: 'none', text: '---------' },
      ],
    }
  },
}
</script>
