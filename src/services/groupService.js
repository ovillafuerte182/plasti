import axios from 'axios'
import Vue from 'vue'

const baseUrl = 'http://3.143.116.184:8080/cloudmessage/group/list'

export default {
  async get() {
    const { data } = await axios.get(baseUrl)
    return data.map(group => ({ value: group.group_id, text: Vue.filter('capitalize')(group.name) }))
  },
}
