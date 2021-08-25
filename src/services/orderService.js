import axios from 'axios'

const createURL = 'http://3.143.116.184:8082/sgpmes/job/create'
const updateURL = 'http://3.143.116.184:8082/sgpmes/job/update'

export default {
  async create(data) {
    const result = await axios.post(createURL, data)
    return result
  },

  async update(data) {
    const result = await axios.post(updateURL, data)
    return result
  },
}
