import { useQuery } from "@tanstack/react-query";
import { getBoards } from "./get-boards.ts";

export const useFetchBoards = () => {
  const { data, error, isFetching } = useQuery({
    queryKey: ["boards-controller/boards"],
    queryFn: () => {
      return getBoards();
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return { data, error, isFetching };
};
