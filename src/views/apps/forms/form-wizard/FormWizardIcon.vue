<template>
  <div>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      finish-button-text="Submit"
      back-button-text="Previous"
      class="steps-transparent mb-3"
      @on-complete="formSubmitted"
    >
      <!-- account detail tab -->
      <tab-content
        title="Planta"
        icon="feather icon-file-text"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Agregue la planta
            </h5>
            <small class="text-muted">
              Agregue la planta manualmente y continue al siguiente paso.
            </small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Compañia"
              label-for="i-company"
            >
              <b-form-input
                id="i-company"
                placeholder="Nombre Compañia"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Dirección"
              label-for="i-dir"
            >
              <b-form-input
                id="i-dir"
                placeholder="Dirección Compañia"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Descripción"
              label-for="i-desc"
            >
              <b-form-input
                id="i-desc"
                placeholder="Descripción Compañia"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Código"
              label-for="i-code"
            >
              <b-form-input
                id="i-code"
                placeholder="Código Compañia"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Titulo"
              label-for="i-tittle"
            >
              <b-form-input
                id="i-tittle"
                placeholder="Ej. Planta Cali"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- personal details -->
      <tab-content
        title="Zonas"
        icon="feather icon-user"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Agregue la zona
            </h5>
            <small class="text-muted">Escoja la planta y asocia una zona a ella.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Escoger Planta"
              label-for="i-planta"
            >
              <v-select
                id="i-planta"
                v-model="selectedContry"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="i-code-zone"
              label="Código Zona"
            >
              <b-form-input
                id="i-code-zone"
                placeholder="Código Zona"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Descripción Zona"
              label-for="i-desc-zone"
            >
              <b-form-input
                id="i-desc-zone"
                placeholder="Descripción Zona"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Titulo"
              label-for="i-Tittle-zone"
            >
              <v-select
                id="i-Tittle-zone"
                v-model="selectedLanguage"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="languageName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- address -->
      <tab-content
        title="Grupos"
        icon="feather icon-map-pin"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Agregar Grupos
            </h5>
            <small class="text-muted">Escoja planta y zona ya configurada y asocie un grupo de máquinas.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Escoger Planta"
              label-for="i-planta-gr"
            >
              <v-select
                id="i-planta-gr"
                v-model="selectedContryG"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Escoger Zona"
              label-for="i-zona-gr"
            >
              <v-select
                id="i-zona-gr"
                v-model="selectedContry2"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName2"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Código Grupo de Máquinas"
              label-for="i-pincode"
            >
              <b-form-input
                id="i-pincode"
                placeholder="658921"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="i-desc-machine"
              label="Descripción de Grupo de Máquinas"
            >
              <b-form-input
                id="i-desc-machine"
                placeholder="descripción de Grupo de máquinas"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="i-tittle-machine"
              label="Titulo Grupo de Máquinas"
            >
              <b-form-input
                id="i-tittle-machine"
                placeholder="Ej. Imp. MRF"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
      <!-- social link -->
      <tab-content
        title="Maquinas"
        icon="feather icon-map-pin"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Agregar Maquinas
            </h5>
            <small class="text-muted">Escoja planta,zona y grupo ya configurados y asocie una máquina.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Escoger Planta"
              label-for="i-planta-ma"
            >
              <v-select
                id="i-planta-ma"
                v-model="selectedContryM"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Escoger Zona"
              label-for="i-zona-Ma"
            >
              <v-select
                id="i-zona-Ma"
                v-model="selectedContry3"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName2"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Escoger Grupo"
              label-for="i-grupo-Ma"
            >
              <v-select
                id="i-grupo-Ma"
                v-model="selectedContry4"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName4"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Código de Máquina"
              label-for="i-pincode-ma"
            >
              <b-form-input
                id="i-pincode-ma"
                placeholder="658921"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="i-desc-machine-m"
              label="Descripción de Máquina"
            >
              <b-form-input
                id="i-desc-machine-ma"
                placeholder="descripción de máquina"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="i-tittle-machine-ma"
              label="Titulo de Máquina"
            >
              <b-form-input
                id="i-tittle-machine-ma"
                placeholder="Ej. MRF 1"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- users -->
      <tab-content
        title="Usuarios"
        icon="feather icon-map-pin"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Agregar Usuarios
            </h5>
            <small class="text-muted">Asocie un Usuario diligenciando los siguientes campos.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Escoger Planta"
              label-for="i-planta-us"
            >
              <v-select
                id="i-planta-us"
                v-model="selectedContryU"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Escoger Zona"
              label-for="i-zona-us"
            >
              <v-select
                id="i-zona-us"
                v-model="selectedContry5"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName2"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Escoger Grupo"
              label-for="i-grupo-us"
            >
              <v-select
                id="i-grupo-us"
                v-model="selectedContry6"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName4"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Identificación"
              label-for="i-pincode-us"
            >
              <b-form-input
                id="i-pincode-us"
                placeholder="945678901"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="name"
              label="Nombre"
            >
              <b-form-input
                id="name"
                placeholder="Nombre"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="last"
              label="Apellido"
            >
              <b-form-input
                id="last"
                placeholder="Apellido"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Celular"
              label-for="cel"
            >
              <b-form-input
                id="cel"
                placeholder="3004301234"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Email"
              label-for="vi-email"
            >
              <b-form-input
                id="vi-email"
                type="email"
                placeholder="john.doe@email.com"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="cargo"
              label="Cargo"
            >
              <b-form-input
                id="cargo"
                placeholder="Cargo"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="Image"
              label="Foto"
            >
              <b-form-file
                v-model="file1"
                :state="Boolean(file1)"
                placeholder="Escoja un archivo o arrastrelo aquí..."
                drop-placeholder="arrastrar archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>

  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormFile,
} from 'bootstrap-vue'
import { codeIconInfo } from './code'

export default {
  components: {
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormFile,
    vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
      selectedContry: 'select_value',
      selectedContryG: 'select_value',
      selectedContryM: 'select_value',
      selectedContry2: 'select_value',
      selectedContry3: 'select_value',
      selectedContry4: 'select_value',
      selectedLanguage: 'nothing_selected',
      file1: null,
      codeIconInfo,
      countryName: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Planta Cali', text: 'Planta Cali' },
        { value: 'Planta Buga', text: 'Planta Buga' },
        { value: 'Planta Palmira', text: 'Planta Palmira' },
        { value: 'Planta Candelaria', text: 'Planta Candelaria' },
        { value: 'Planta Bugalagrande', text: 'Planta Bugalagrande' },
        { value: 'Planta Cerrito', text: 'Planta Cerrito' },
        { value: 'Planta Tulua', text: 'Planta Tulua' },
      ],
      countryName2: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Zona Cali', text: 'Zona Cali' },
        { value: 'Zona Buga', text: 'Zona Buga' },
        { value: 'Zona Palmira', text: 'Zona Palmira' },
        { value: 'Zona Candelaria', text: 'Zona Candelaria' },
        { value: 'Zona Bugalagrande', text: 'Zona Bugalagrande' },
        { value: 'Zona Cerrito', text: 'Zona Cerrito' },
        { value: 'Zona Tulua', text: 'Zona Tulua' },
      ],
      countryName4: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Grupo Cali', text: 'Grupo Cali' },
        { value: 'Grupo Buga', text: 'Grupo Buga' },
        { value: 'Grupo Palmira', text: 'Grupo Palmira' },
        { value: 'Grupo Candelaria', text: 'Grupo Candelaria' },
        { value: 'Grupo Bugalagrande', text: 'Grupo Bugalagrande' },
        { value: 'Grupo Cerrito', text: 'Grupo Cerrito' },
        { value: 'Grupo Tulua', text: 'Grupo Tulua' },
      ],
      languageName: [
        { value: 'nothing_selected', text: 'Nothing Selected' },
        { value: 'Rebobine', text: 'Rebobine' },
        { value: 'Rebobine1', text: 'Rebobine1' },
        { value: 'Rebobine2', text: 'Rebobine2' },
        { value: 'Rebobine3', text: 'Rebobine3' },
        { value: 'Rebobine4', text: 'Rebobine4' },
        { value: 'Rebobine5', text: 'Rebobine5' },
        { value: 'Rebobine6', text: 'Rebobine6' },
      ],
    }
  },
  methods: {
    formSubmitted() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Form Submitted',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
    },
  },
}
</script>
