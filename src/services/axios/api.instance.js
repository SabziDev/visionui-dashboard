/* eslint-disable unicorn/no-top-level-side-effects */

import axios from "axios";

import { API_BASE_URL } from "@/data/constants";

import errorHandlers from "./errorHandlers/errorHandlers";

const api = axios.create({
  baseURL: API_BASE_URL,
});
api.interceptors.response.use(null, errorHandlers);

export default api;
