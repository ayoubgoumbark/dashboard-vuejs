import axios from "axios";
//import MyTokenService from "../MyToken/MyTokenService";
/* http://172.16.16.82:9092`, */

const API = axios.create({
  baseURL: `http://localhost:3030/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    //const token = sessionStorage.getItem('jwt');

    const token = sessionStorage["jwt"];

    if (token) {
      config.headers.Authorization = token;
      //this.$store.commit('setUsername',(MyTokenService.payload(token).sub));
    } else {
      delete API.defaults.headers.common.Authorization;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

export default API;
