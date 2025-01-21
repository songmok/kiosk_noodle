import apiGetStores from "@/apis/apiGetStores";
import { useQuery } from "@tanstack/react-query";

export const useGetStoresAll = () => {
  const { data } = useQuery<any[]>({
    queryKey: ["dataStoresAll"],
    queryFn: () => apiGetStores(),
  });
  return { data };
};
