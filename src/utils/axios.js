import axios from 'axios';
import { DEFAULT_BASE_URL } from 'src/constants/endpoints';

const axiosInstance = ({ baseURL = null, method = 'get', headers = {} } = {}) => {
  return axios.create({
    baseURL: baseURL || DEFAULT_BASE_URL,
    method,
    headers,
  });
};

const axiosPOSTRequest = async ({ url = '', data = {}, headers = {} }) => {
  const config = {
    headers,
  };

  const response = await axiosInstance({ method: 'POST' }).post(url, data, config);

  return response;
};

const axiosGETRequest = async ({ url = '', config = {}, headers }) => {
  const response = await axiosInstance({ url, method: 'GET', headers }).get(url, config);

  return response;

  // const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });
};

export { axiosInstance, axiosPOSTRequest, axiosGETRequest };
