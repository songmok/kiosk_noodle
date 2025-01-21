import { defaultinstance } from "./setAxios/axios";
import requests from "./setAxios/request";

const apiGetStores = async () => {
  const data = await defaultinstance
    .get(`${requests.fetchStores}`)
    .then((res) => {
      return res.data || {};
    })
    .catch((err) => {
      throw err;
    });
  return data || {};
};

export default apiGetStores;
