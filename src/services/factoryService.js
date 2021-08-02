import axios from 'axios'

const baseUrl = 'http://3.143.116.184:8082/sgpmes/factory/list'

export default {
  async get() {
    const { data } = await axios.get(baseUrl)
    return data.map(factory => ({ value: factory.factory_id, text: factory.name }))
  },
}
