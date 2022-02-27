import {axios} from 'axios'

const API = axios.create({
    baseURL: '192.168.0.103:8000'
  });

export default API; 