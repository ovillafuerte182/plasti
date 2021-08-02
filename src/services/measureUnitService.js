import axios from 'axios'
import Vue from 'vue'

const baseUrl = 'http://3.143.116.184:8082/sgpmes/unit/list'

export default {
  async get() {
    const { data } = await axios.get(baseUrl)
    return data.map(unit => ({ value: unit.unit_id, text: Vue.filter('capitalize')(unit.name) }))
  },
}
