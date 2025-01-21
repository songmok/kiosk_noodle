import { defaultinstance } from "./setAxios/axios";
import requests from "./setAxios/request";

const apiGetMenus = async () => {
  const data = await defaultinstance
    .get(`${requests.fetchMenus}?store_id=${1}`)
    .then((res) => {
      return res.data || {};
    })
    .catch((err) => {
      throw err;
    });
  return data || {};
};

export default apiGetMenus;
