import axios from 'axios'
import Vue from 'vue'

const baseUrl = 'http://3.143.116.184:8080/cloudmessage/user/list/1'

export default {
  async get() {
    const { data } = await axios.get(baseUrl)
    return data.map(user => ({ value: user.user_id, text: Vue.filter('capitalize')(`${user.name} ${user.last_name}`) }))
  },
}
