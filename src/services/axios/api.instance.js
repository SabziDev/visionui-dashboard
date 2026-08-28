/* eslint-disable unicorn/no-top-level-side-effects */

import axios from "axios";

import { API_BASE_URL } from "@/data/constants";

import errorHandler from "./errorHandler/errorHandler";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});
api.interceptors.response.use(null, errorHandler);

export default api;
