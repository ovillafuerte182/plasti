<template>

  <b-card-code
    title="Crear Orden"
  >
    <validation-observer
      ref="observer"
      v-slot="{ handleSubmit }"
    >
      <b-form
        @submit.stop.prevent="handleSubmit(onSubmit)"
      >
        <b-row>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="Codigo"
              rules="required"
            >
              <b-form-group
                label="Codigo"
                label-for="codigo"
              >
                <b-form-input
                  id="codigo"
                  v-model.trim="form.code"
                  :state="getValidationState(validationContext)"
                  placeholder="Código"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>

          </b-col>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="estado"
              rules="required"
            >
              <b-form-group
                label="Estado"
                label-for="estado"
              >
                <b-form-select
                  v-model="form.state"
                  :state="getValidationState(validationContext)"
                  :options="options"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="cliente"
              rules="required"
            >
              <b-form-group
                label="Cliente"
                label-for="cliente"
              >
                <b-form-input
                  id="cliente"
                  v-model="form.customer_name"
                  :state="getValidationState(validationContext)"
                  placeholder="Cliente"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="producto"
              rules="required"
            >
              <b-form-group
                label="Producto"
                label-for="producto"
              >
                <b-form-input
                  id="producto"
                  v-model="form.item_name"
                  :state="getValidationState(validationContext)"
                  placeholder="Producto"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="maquina"
              rules="required"
            >
              <b-form-group
                label="Maquina"
                label-for="maquina"
              >
                <b-form-select
                  v-model="form.machine.machine_id"
                  :state="getValidationState(validationContext)"
                  :options="optionsMaquina"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="cantidad"
              rules="required"
            >
              <b-form-group
                label="Cantidad"
                label-for="cantidad"
              >
                <b-form-input
                  id="cantidad"
                  v-model.number="form.quantity"
                  type="number"
                  :state="getValidationState(validationContext)"
                  placeholder="Cantidad"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="unidad"
              rules="required"
            >
              <b-form-group
                label="Unidad de Medida"
                label-for="unidad"
              >
                <b-form-select
                  v-model="form.unit"
                  :state="getValidationState(validationContext)"
                  :options="optionsUnidad"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="motivo"
              rules="required"
            >
              <b-form-group
                label="Motivo"
                label-for="motivo"
              >
                <b-form-select
                  v-model.number="form.reason"
                  :state="getValidationState(validationContext)"
                  :options="optionsMotivo"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="ejecutado"
              rules="required"
            >
              <b-form-group
                label="Ejecutado"
                label-for="ejecutado"
              >
                <b-form-radio-group
                  id="ejecutado"
                  v-model="form.executed"
                  :state="getValidationState(validationContext)"
                  :options="radioOptions"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="prealistamiento"
              rules="required"
            >
              <b-form-group
                label="Pre-alistamiento"
                label-for="prealistamiento"
              >
                <b-form-radio-group
                  v-model="form.setup"
                  :state="getValidationState(validationContext)"
                  :options="radioOptions"
                  name="prealistamiento"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col
            md="4"
            class="mb-1"
          >
            <validation-provider
              v-slot="validationContext"
              name="puesto"
              rules="required"
            >
              <b-form-group
                label="Puesto"
                label-for="puesto"
              >
                <b-form-input
                  id="Puesto"
                  v-model.number="form.order"
                  type="number"
                  :state="getValidationState(validationContext)"
                  placeholder="Puesto"
                />
                <small class="text-danger">{{ validationContext.errors[0] }}</small>
              </b-form-group>
            </validation-provider>
          </b-col>
          <!-- submit and reset -->
          <b-col
            md="4"
            class="mt-2"
          >
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
              @click="resetForm()"
            >
              Reset
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>

    <template #code>
      {{ codeMultipleColumn }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BRow, BCol, BFormGroup, BFormRadioGroup, BFormInput, BButton, BForm, BFormSelect,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import machineService from '@/services/machineService'
import causeService from '@/services/causeService'
import orderStatusService from '@/services/orderStatusService'
import measureUnitService from '@/services/measureUnitService'
import orderService from '@/services/orderService'
import { codeMultipleColumn } from './code'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormRadioGroup,
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
      radioOptions: [
        { text: 'SI', value: 'SI' },
        { text: 'NO', value: 'NO' },
      ],
      form: {
        job_id: null,
        machine: {
          machine_id: null,
        },
        company: {
          company_id: 1,
          code: 'CO001',
          name: 'PLASTIC FILMS INTERNACIONAL',
          description: 'PLASTIC FILMS INTERNACIONAL',
          state: 'ACTIVO',
        },
        code: '',
        order: null,
        item_code: 0,
        item_name: '',
        customer_code: 0,
        customer_name: '',
        description: '',
        state: '',
        executed: '',
        creation_user: 'admin@gmail.com',
        creation_date: '2021-07-12T21:43:31.006+00:00',
        quantity: null,
        unit: null,
        quantity2: 0,
        unit2: '',
        setup: '',
        setup_quantity: 0,
        setup_time: 0,
        other_text_structure: '',
        recipe: '',
        reason: null,
      },
    }
  },
  watch: {
    'form.customer_name': {
      handler(after) {
        this.form.customer_name = this.$options.filters.capitalize(after)
      },
      deep: true,
    },
    'form.item_name': {
      handler(after) {
        this.form.item_name = this.$options.filters.capitalize(after)
      },
      deep: true,
    },
  },
  async created() {
    this.optionsMaquina = await machineService.get()
    this.optionsMaquina.unshift({ value: null, text: 'Seleccione una maquina' })

    this.optionsMotivo = await causeService.get()
    this.optionsMotivo.unshift({ value: null, text: 'Seleccione una causa' })

    this.options = await orderStatusService.get()
    this.options.unshift({ value: null, text: 'Seleccione un estado' })

    this.optionsUnidad = await measureUnitService.get()
    this.optionsUnidad.unshift({ value: null, text: 'Seleccione una unidad' })
  },
  methods: {
    async onSubmit() {
      const result = await orderService.create(this.form)

      if (result.status === 200) {
        this.$swal({
          icon: 'success',
          title: 'La orden fue registrada con éxito.',
          // showConfirmButton: false,
          // timer: 2000,
          willClose: () => {
            this.$router.push('orders-page')
          },
        })
      }
    },
    resetForm() {
      this.form.machine.machine_id = null
      this.form.code = ''
      this.form.order = null
      this.form.item_name = ''
      this.form.customer_name = ''
      this.form.state = ''
      this.form.executed = ''
      this.form.quantity = null
      this.form.unit = ''
      this.form.setup = ''
      this.form.reason = ''

      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
  },
}
</script>
