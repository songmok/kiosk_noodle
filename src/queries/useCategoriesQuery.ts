import apiGetCategories from "@/apis/apiGetCategories";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
  const { data } = useQuery<any[]>({
    queryKey: ["dataCategories"],
    queryFn: () => apiGetCategories(),
  });
  return { data };
};
