import axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const username = process.env.USER
const password = process.env.PASSWD
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

const api = axios.create( { 
    baseURL: 'http://187.72.11.225:9095/rest',
    headers: {Authorization: `Basic ${token}`},
    params: {page: 1, pagesize: 20}
});

export default api;