import axios from 'axios'

const baseUrl = 'http://3.143.116.184:8082/sgpmes/machine/1'

export default {
  async get() {
    const { data } = await axios.get(baseUrl)
    return data.map(machine => ({ value: machine.machine_id, text: machine.name }))
  },
}
