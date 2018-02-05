import axios from 'axios'

import { API_HOST, API_PORT } from '../api/config'

export const baseHost = API_HOST
export const baseURL = API_HOST + '/calculate'

export function getData (userId) {
  return axios.get(baseURL + '/get_data', {params: {
    id: userId
    }})
}

