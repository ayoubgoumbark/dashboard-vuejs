/* eslint-disable no-unused-vars */
import axios from "axios";

const S3Bucket = "https://alyousr-files.s3.amazonaws.com/PublicFile/";

const api = axios.create({
  /*   baseURL: `http://localhost:3030/api`, */

  baseURL: `https://backend.alyousr.link/api`,
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage["jwt"];

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common.Authorization;
    }

    return config;
  },

  (error) => {
    Promise.reject(error);
  }
);

export { api, S3Bucket };
