import axios, {AxiosInstance, CreateAxiosDefaults} from 'axios'


const config: CreateAxiosDefaults = {
  baseURL: 'http://3.36.117.127:8080/v1'
}

export const oaxios: AxiosInstance = axios.create(config)
