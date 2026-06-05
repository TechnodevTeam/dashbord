// providers/dataProvider.ts
import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { getCookie } from '@/utils/cookie';

const API_URL = 'http://localhost:8080';

const httpClient = (url: string, options: any = {}) => {
  const token = getCookie('token') || localStorage.getItem('token');
  if (token) {
    options.headers = new Headers(options.headers || {});
    options.headers.set('Authorization', `Bearer ${token}`);
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(API_URL, httpClient);
export default dataProvider;