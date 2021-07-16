<template>
  <b-card-code
    title="Crear Orden"
  >
    <b-form inline @submit.prevent>
      <b-row>
        <b-col md="6"
      xl="4"
      class="mb-1">
           <b-form-input id="codigo" placeholder="Código" />
        </b-col>
        <!-- date -->
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-input id="fecha" placeholder="Fecha" />
        </b-col>
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-group label="Estado" label-for="estado">
          <b-form-select v-model="selected" :options="options" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
      </b-row>
      <b-row>
        <b-col md="6"
      xl="4"
      class="mb-1">
           <b-form-input id="cliente" placeholder="Cliente" />
        </b-col>
        <!-- date -->
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-input id="product" placeholder="Producto" />
        </b-col>
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-group label="Maquina" label-for="maquina">
          <b-form-select v-model="selected" :options="optionsMaquina" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-group label="Cantidad" label-for="Cantidad">
           <b-form-input id="Cantidad" placeholder="Cantidad" />
          </b-form-group>
        </b-col>
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-group label="Unidad de Medida" label-for="unidad">
          <b-form-select v-model="selected" :options="optionsUnidad" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-group label="Motivo" label-for="motivo">
          <b-form-select v-model="selected" :options="optionsMotivo" />
          </b-form-group>
        </b-col>
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-group label="Ejecutado" label-for="ejecutado">
          <b-form-select v-model="selected" :options="optionsEjecutado" />
          </b-form-group>
        </b-col>
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-group label="Pre-alistamiento" label-for="prealistamiento">
          <b-form-select v-model="selected" :options="optionsPrealistamiento" />
          </b-form-group>
        </b-col>
        <b-col md="6"
      xl="4"
      class="mb-1">
          <b-form-group label="Puesto" label-for="puesto">
           <b-form-input id="Puesto" placeholder="Puesto" />
          </b-form-group>
        </b-col>
        <!-- submit and reset -->
        <b-col md="4">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Submit
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-secondary"
          >
            Reset
          </b-button>
        </b-col>
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
      options: [
        { value: null, text: 'Please select some state' },
        { value: 'Low', text: 'Low' },
        { value: 'Medium', text: 'Medium' },
        { value: 'High', text: 'High' },
      ],
      optionsMaquina: [
        { value: null, text: 'Please select some machine' },
        { value: 'Machine1', text: 'Machine 1' },
        { value: 'Machine2', text: 'Machine 2' },
        { value: 'Machine3', text: 'Machine 3' },
      ],
      optionsUnidad: [
        { value: null, text: 'Please select some unit of measure' },
        { value: 'Measure1', text: 'Measure 1' },
        { value: 'Measure2', text: 'Measure 2' },
        { value: 'Measure3', text: 'Measure 3' },
      ],
      optionsMotivo: [
        { value: null, text: 'Please select some unit of measure' },
        { value: 'Motivo1', text: 'Motivo 1' },
        { value: 'Motivo2', text: 'Motivo 2' },
        { value: 'Motivo3', text: 'Motivo 3' },
      ],
      optionsEjecutado: [
        { value: null, text: 'Please select some unit of measure' },
        { value: 'Ejecutado1', text: 'Ejecutado 1' },
        { value: 'Ejecutado2', text: 'Ejecutado 2' },
        { value: 'Ejecutado3', text: 'Ejecutado 3' },
      ],
      optionsPrealistamiento: [
        { value: null, text: 'Please select some unit of measure' },
        { value: 'Prealistamiento1', text: 'Prealistamiento 1' },
        { value: 'Prealistamiento2', text: 'Prealistamiento 2' },
        { value: 'Prealistamiento3', text: 'Prealistamiento 3' },
      ],
    }
  },
}
</script>
