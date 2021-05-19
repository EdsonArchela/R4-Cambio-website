import axios from 'axios'

const apiFrente = axios.create({
  baseURL: 'https://api.demo.frentecorretora.com.br/v1',
})

export default apiFrente
