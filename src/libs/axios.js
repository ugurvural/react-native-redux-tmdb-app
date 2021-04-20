import axios from 'axios';
import {API_TOKEN} from '@env';
axios.defaults.params = {};
axios.defaults.params.api_key = API_TOKEN;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
