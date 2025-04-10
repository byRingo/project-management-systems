import { useQuery } from "@tanstack/react-query";
import { getBoard } from "./get-board.ts";

export const useFetchBoard = (boardId: number) => {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["boards-controller/boards", boardId],
    queryFn: () => {
      return getBoard(boardId);
    },
    enabled: !!boardId,
  });
  return { data, error, isFetching, refetch };
};
