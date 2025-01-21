import { defaultinstance } from "./setAxios/axios";
import requests from "./setAxios/request";

const apiGetMenuOptions = async () => {
  const data = await defaultinstance
    .get(`${requests.fetchMenuOptions}?store_id=${1}`)
    .then((res) => {
      return res.data || {};
    })
    .catch((err) => {
      throw err;
    });
  return data || {};
};

export default apiGetMenuOptions;
