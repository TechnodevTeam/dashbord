import simpleRestProvider from 'ra-data-simple-rest'
import { fetchUtils } from 'react-admin'

const baseURL = 'http://localhost:8080/api'

const httpClient = (url, options = {}) => {
  const token = localStorage.getItem('token')
  const headers = new Headers(options.headers || {})
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  return fetchUtils.fetchJson(url, { ...options, headers })
}

const dataProvider = simpleRestProvider(baseURL, httpClient)

export default dataProvider