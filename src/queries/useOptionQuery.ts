import apiGetMenuOptions from "@/apis/apiGetMenuOptions";
import apiGetOptionGroups from "@/apis/apiGetOptionGroups";
import apiGetOptions from "@/apis/apiGetOptions";
import { useQuery } from "@tanstack/react-query";

export const useGetOptionGroups = () => {
  const { data, isLoading, error } = useQuery<any[]>({
    queryKey: ["dataOptionGroups"],
    queryFn: () => apiGetOptionGroups(),
  });
  return { data: data || [], isLoading, error };
};

export const useGetOptions = () => {
  const { data, isLoading, error } = useQuery<any[]>({
    queryKey: ["dataOptions"],
    queryFn: () => apiGetOptions(),
  });
  return { data: data || [], isLoading, error };
};

export const useGetMenuOptions = () => {
  const { data, isLoading, error } = useQuery<any[]>({
    queryKey: ["dataMenuOptions"],
    queryFn: () => apiGetMenuOptions(),
  });
  return { data: data || [], isLoading, error };
};
