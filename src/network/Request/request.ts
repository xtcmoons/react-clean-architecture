import axios from 'axios'

const service = axios.create({
  baseURL: 'https://cnodejs.org/api/v1', 
  timeout: 3000 
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.success !== true) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service