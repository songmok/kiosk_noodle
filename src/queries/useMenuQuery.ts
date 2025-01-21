import apiGetMenus from "@/apis/apiGetMenus";
import { useQuery } from "@tanstack/react-query";

export const useGetMenus = () => {
  const { data } = useQuery<any>({
    queryKey: ["dataMenus"],
    queryFn: () => apiGetMenus(),
  });
  return { data };
};
