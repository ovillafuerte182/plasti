<template>
  <b-card-code
    title="Programar Notificaciones"
  >
    <b-form
      inline
      @submit.prevent
    >
      <b-row>
        <b-col md="4">
          <form-select-basic />
        </b-col>
        <b-col md="4">
          <form-select-basic-grupo />
        </b-col>
        <b-col md="4">
          <form-select-basic-maquinas />
        </b-col>
      </b-row>
      <b-row>
        <b-card-code
          title="Paradas Maquinas"
        >
          <b-col cols="12">
            <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_1"
            >
              Activar
            </b-form-checkbox> - Notificar cuando sean >=  <b-form-input
              id="paradas1"
              placeholder="Cantidad de paradas"
            /> En <b-form-input
              id="minutos1"
              placeholder="minutos"
            />
          </b-col>
        </b-card-code>
        <b-card-code
          title="Paradas Consecutivas"
        >
          <b-col cols="12">
            <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_1"
            >
              Activar
            </b-form-checkbox> - Notificar cuando se realicen paradas de un mismo evento menor <b-form-input
              id="paradas2"
              placeholder="Cantidad de paradas"
            />
          </b-col>
        </b-card-code>
        <b-card-code
          title="Trabajo Fallido"
        >
          <b-col cols="12">
            <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_1"
            >
              Activar
            </b-form-checkbox> - Notificar trabajos fallidos por <b-form-select
              v-model="selected"
              :options="optionsCausa"
              class="mb-2"
            />
          </b-col>
        </b-card-code>
        <b-card-code
          title="Orden Mantenimiento"
        >
          <b-col cols="12">
            <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_1"
            >
              Activar
            </b-form-checkbox> - Notificar Mantenimiento <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_p"
            >
              Preventivo
            </b-form-checkbox> <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_p"
            >
              Correctivo
            </b-form-checkbox> <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_p"
            >
              Autonomo
            </b-form-checkbox> <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_p"
            >
              Adm Producción
            </b-form-checkbox>
          </b-col>
        </b-card-code>
        <b-card-code
          title="Velocidad"
        >
          <b-col cols="12">
            <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_1"
            >
              Activar
            </b-form-checkbox> - Notificar cuando la velocidad sea menor igual a <b-form-input
              id="paradas1"
              placeholder="Velocidad inf"
            /> o superior a <b-form-input
              id="paradas1"
              placeholder="Velocidad sup"
            />
          </b-col>
        </b-card-code>
        <b-card-code
          title="Kpi Oee"
        >
          <b-col cols="12">
            <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_1"
            >
              Activar
            </b-form-checkbox> - Notificar cuando Kpi Oee sea menor igual a <b-form-input
              id="paradas1"
              placeholder="Kpi Oee inf"
            /> o superior a <b-form-input
              id="paradas1"
              placeholder="Kpi Oee sup"
            />
          </b-col>
        </b-card-code>
        <b-card-code
          title="Kpi disponibilidad"
        >
          <b-col cols="12">
            <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_1"
            >
              Activar
            </b-form-checkbox> - Notificar cuando Kpi disponibilidad sea menor igual a <b-form-input
              id="paradas1"
              placeholder="Kpi inf"
            /> o >= <b-form-input
              id="paradas1"
              placeholder="Kpi sup"
            />
          </b-col>
        </b-card-code>
        <b-card-code
          title="Kpi Rendimiento"
        >
          <b-col cols="12">
            <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_1"
            >
              Activar
            </b-form-checkbox> - Notificar cuando Kpi Rendimiento sea menor igual a <b-form-input
              id="paradas1"
              placeholder="Kpi inf"
            /> o >= <b-form-input
              id="paradas1"
              placeholder="Kpi sup"
            />
          </b-col>
        </b-card-code>
        <b-card-code
          title="Kpi Calidad"
        >
          <b-col cols="12">
            <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_1"
            >
              Activar
            </b-form-checkbox> - Notificar cuando Kpi Calidad sea menor igual a <b-form-input
              id="paradas1"
              placeholder="Kpi inf"
            /> o >= <b-form-input
              id="paradas1"
              placeholder="Kpi sup"
            />
          </b-col>
        </b-card-code>
        <b-card-code
          title="Kpi Desperdicio"
        >
          <b-col cols="12">
            <b-form-checkbox
              v-model="selected"
              inline
              value="Notifica_1"
            >
              Activar
            </b-form-checkbox> - Notificar cuando Kpi Desp sea menor igual a <b-form-input
              id="paradas1"
              placeholder="Kpi inf"
            /> o >= <b-form-input
              id="paradas1"
              placeholder="Kpi sup"
            />
          </b-col>
        </b-card-code>
        <b-card-code title="Configurar Notificaciones de Usuario">
          <b-col cols="12">
            <vue-select-multiple-user />
          </b-col>
        </b-card-code>
        <b-card-code title="Configurar Notificaciones de Grupo">
          <b-col cols="12">
            <vue-select-multiple-group />
          </b-col>
        </b-card-code>

        <b-col cols="12">
          <b-form-group>
            <b-form-checkbox
              id="checkbox-10"
              name="checkbox-10"
              value="Remember_me"
            >
              Remember me
            </b-form-checkbox>
          </b-form-group>
        </b-col>

        <!-- submit and reset -->
        <b-col>
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
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BFormSelect,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import causeFailedJobService from '@/services/causeFailedJobService'
import FormSelectBasic from '../form-element/form-select/FormSelectBasic.vue'
import FormSelectBasicGrupo from '../form-element/form-select/FormSelectBasicGrupo.vue'
import FormSelectBasicMaquinas from '../form-element/form-select/FormSelectBasicMaquinas.vue'
import VueSelectMultipleUser from '../form-element/vue-select/VueSelectMultipleUser.vue'
import VueSelectMultipleGroup from '../form-element/vue-select/VueSelectMultipleGroup.vue'
import { codeMultipleColumn } from './code'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    FormSelectBasic,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BFormSelect,
    BForm,
    BButton,
    FormSelectBasicGrupo,
    FormSelectBasicMaquinas,
    VueSelectMultipleUser,
    VueSelectMultipleGroup,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeMultipleColumn,
      optionsCausa: [],
    }
  },
  async created() {
    this.optionsCausa = await causeFailedJobService.get()
    this.optionsCausa.unshift({ value: null, text: 'Please select a cause' })
  },
}
</script>
