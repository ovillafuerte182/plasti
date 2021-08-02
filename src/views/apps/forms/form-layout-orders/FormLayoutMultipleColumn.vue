<template>

  <b-card-code
    title="Crear Orden"
  >
    <b-form
      inline
      @submit.prevent
    >
      <b-row>
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-input
            id="codigo"
            v-model.trim="orderForm.code"
            placeholder="Código"
          />
        </b-col>
        <!-- date -->
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-input
            id="fecha"
            v-model.trim="orderForm.date"
            placeholder="Fecha"
          />
        </b-col>
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-group
            label="Estado"
            label-for="estado"
          >
            <b-form-select
              v-model="orderForm.status"
              :options="options"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row />
      <b-row>
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-input
            id="cliente"
            v-model="orderForm.client"
            placeholder="Cliente"
          />
        </b-col>
        <!-- date -->
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-input
            id="product"
            v-model="orderForm.product"
            placeholder="Producto"
          />
        </b-col>
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-group
            label="Maquina"
            label-for="maquina"
          >
            <b-form-select
              v-model="orderForm.machine"
              :options="optionsMaquina"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-group
            label="Cantidad"
            label-for="Cantidad"
          >
            <b-form-input
              id="Cantidad"
              v-model.number="orderForm.amount"
              placeholder="Cantidad"
            />
          </b-form-group>
        </b-col>
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-group
            label="Unidad de Medida"
            label-for="unidad"
          >
            <b-form-select
              v-model="orderForm.unitMeasure"
              :options="optionsUnidad"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-group
            label="Motivo"
            label-for="motivo"
          >
            <b-form-select
              v-model.number="orderForm.reason"
              :options="optionsMotivo"
            />
          </b-form-group>
        </b-col>
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-group
            label="Ejecutado"
            label-for="ejecutado"
          >
            <b-form-select
              v-model="orderForm.executed"
              :options="optionsEjecutado"
            />
          </b-form-group>
        </b-col>
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-group
            label="Pre-alistamiento"
            label-for="prealistamiento"
          >
            <b-form-select
              v-model="orderForm.preEnlistment"
              :options="optionsPrealistamiento"
            />
          </b-form-group>
        </b-col>
        <b-col
          md="6"
          xl="4"
          class="mb-1"
        >
          <b-form-group
            label="Puesto"
            label-for="puesto"
          >
            <b-form-input
              id="Puesto"
              v-model="orderForm.job"
              placeholder="Puesto"
            />
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
import machineService from '@/services/machineService'
import causeService from '@/services/causeService'
import orderStatusService from '@/services/orderStatusService'
import measureUnitService from '@/services/measureUnitService'
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
      options: [],
      optionsMaquina: [],
      optionsUnidad: [],
      optionsMotivo: [],
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
      orderForm: {
        code: '',
        date: '',
        status: '',
        client: '',
        product: '',
        machine: '',
        amount: 0,
        unitMeasure: '',
        reason: '',
        executed: '',
        preEnlistment: '',
        job: '',
      },
    }
  },
  async created() {
    this.optionsMaquina = await machineService.get()
    this.optionsMaquina.unshift({ value: null, text: 'Please select some machine' })

    this.optionsMotivo = await causeService.get()
    this.optionsMotivo.unshift({ value: null, text: 'Please select some reason' })

    this.options = await orderStatusService.get()
    this.options.unshift({ value: null, text: 'Please select some state' })

    this.optionsUnidad = await measureUnitService.get()
    this.optionsUnidad.unshift({ value: null, text: 'Please select some unit of measure' })
  },
}
</script>
