import axios from 'axios'

const baseUrl = 'http://3.143.116.184:8082/sgpmes/job/state'

export default {
  async get() {
    const { data } = await axios.get(baseUrl)
    return data.map(status => ({ value: status.id, text: status.name }))
  },
}
