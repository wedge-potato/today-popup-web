import axios, {AxiosInstance, CreateAxiosDefaults} from 'axios'


const config: CreateAxiosDefaults = {
  baseURL: 'http://dev-api.todaypopup.com/v1/'
}

export const oaxios: AxiosInstance = axios.create(config)
