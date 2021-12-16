import axios from 'axios';

export const apiConnect = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
  }
});
