import { useQuery } from "@tanstack/react-query";
import { getBoards } from "./get-boards.ts";

export const useFetchBoards = () => {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["boards-controller/boards"],
    queryFn: () => {
      return getBoards();
    },
    //Отключаем рефеч по фокусу и монтировке
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return { data, error, isFetching, refetch };
};
