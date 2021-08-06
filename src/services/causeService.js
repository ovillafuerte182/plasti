import axios from 'axios'

const baseUrl = 'http://3.143.116.184:8080/cloudmessage/notications/list'

export default {
  async get() {
    const { data } = await axios.get(baseUrl)
    return data.map(cause => ({ value: cause.message_config_id, text: cause.name }))
  },
}
