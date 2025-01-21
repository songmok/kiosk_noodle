import axios from "axios";

const BASE_URL = "https://api.sevensystem.store/";

const instanceConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};

export const defaultinstance = axios.create({ baseURL: BASE_URL });
export const instance = axios.create(instanceConfig);
