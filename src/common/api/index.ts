import axios from 'axios';

import { API_BASE } from './constants';

export const apiService = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-type': 'application/json',
  },
});
