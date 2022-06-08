import axios, { AxiosRequestHeaders } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const headers: AxiosRequestHeaders = {
  'Content-Type': 'application/json'
};
if (localStorage.getItem("accessToken") !== undefined) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  headers.Authorization = `Beater ${localStorage.getItem("accessToken")}`;
}
axios.defaults.baseURL = process.env.REACT_APP_API_HOST;
axios.defaults.headers.common = headers;

export default axios;
