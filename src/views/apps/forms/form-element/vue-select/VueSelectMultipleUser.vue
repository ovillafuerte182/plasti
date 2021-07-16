<template>
  <b-card title="">
    <b-row>
      <b-col lg="12">
        <b-card-code
          title="Usuarios"
          class="border"
        >
          <b-card-text>
            <span>Seleccione los usuarios que serán notificados.</span>
          </b-card-text>

          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            multiple
            label="title"
            :options="option"
          />

          <template #code>
            {{ codeVueMultiBasic }}
          </template>
        </b-card-code>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import vSelect from 'vue-select'
import {
  codeVueMultiBasic, codeVueMultiIcon, codeMultiPush, codeVueSelectionLimit, codeVueDir,
} from './code'

export default {
  components: {
    BRow,
    BCol,
    BCardText,
    BCard,
    BCardCode,
    vSelect,
  },
  data() {
    return {
      codeVueMultiBasic,
      codeVueMultiIcon,
      codeMultiPush,
      codeVueSelectionLimit,
      codeVueDir,
      dir: 'ltr',
      selected: [
        { title: 'Juan' },
        { title: 'Pepe' },
      ],
      selected1: [
        {
          title: 'Command',
          icon: 'CommandIcon',
        },
      ],
      selected2: [],
      selected3: [{
        title: 'Database',
        icon: 'DatabaseIcon',
      }],
      options: [],
      optionsGrupo: [],
      option: [
        { title: 'Juan' },
        { title: 'Pedro' },
        { title: 'Pepe' },
        { title: 'Luis' },
        { title: 'Julio' },
        { title: 'Raul' },
        { title: 'Alberto' },
      ],
      optiongrupo: [
        { title: 'Grupo1' },
        { title: 'Grupo2' },
        { title: 'Grupo3' },
        { title: 'Grupo4' },
        { title: 'Grupo5' },
      ],
      books: [
        {
          title: 'Database',
          icon: 'DatabaseIcon',
        },
        {
          title: 'Codepen',
          icon: 'CodepenIcon',
        },
        {
          title: 'Aperture ',
          icon: 'ApertureIcon',
        },
        {
          title: 'Command',
          icon: 'CommandIcon',
        },
      ],
    }
  },
}
</script>
