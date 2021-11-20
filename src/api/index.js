import axios from 'axios';
// import URLS from '~shared/constants/urls';

const API = axios.create({
  baseURL: 'www.google.com', //Set the baseURL as env
  timeout: 16000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

function getAuthToken() {
  //Fetch token from state here.
  return undefined;
}

const handleRequest = async req => {
  if (getAuthToken()) req.headers['Authorization'] = `Token ${getAuthToken()}`;
  return req;
};

const handleError = error => {
  /*global Promise */
  /*eslint no-undef: "error"*/
  let parsed_error = Object.assign({}, error);
  return Promise.reject(parsed_error?.response?.data);
};

const handleResponse = response => {
  return Promise.resolve(response.data);
};

API.interceptors.request.use(handleRequest);
API.interceptors.response.use(handleResponse, handleError);

export default API;
