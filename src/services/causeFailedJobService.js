import axios from 'axios'

const baseUrl = 'http://3.143.116.184:8082/sgpmes/reason/list'

export default {
  async get() {
    const { data } = await axios.get(baseUrl)
    return data.map(cause => ({ value: cause.reason_id, text: cause.name_re }))
  },
}
