import useSWR from "swr";
import { api } from "./api";

export const useFetch = (url: string | null) => {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const response = await api(url);
    return response.data;
  });

  return [data, error, mutate];
};
