import axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const username = 'usuario'
const password = 'senha'
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

const api = axios.create( { 
    baseURL: proxyurl + 'http://187.72.11.225:9095/rest',
    headers: {Authorization: `Basic ${token}`},
    params: {page: 1, pagesize: 20}
});

export default api;