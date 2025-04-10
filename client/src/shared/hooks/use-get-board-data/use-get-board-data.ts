import { useFetchBoard } from "../../queries/boards-controller/get-board/use-fetch-board.ts";

export const useGetBoardData = (boardId: number) => {
  const { data: boardData } = useFetchBoard(boardId);

  return {
    Backlog:
      boardData
        ?.filter((board) => board.status === "Backlog")
        .map((board) => {
          return {
            id: board.id + "!",
          };
        }) || [],
    InProgress:
      boardData
        ?.filter((board) => board.status === "InProgress")
        .map((board) => {
          return {
            id: board.id + "!",
          };
        }) || [],
    Done:
      boardData
        ?.filter((board) => board.status === "Done")
        .map((board) => {
          return {
            id: board.id + "!",
          };
        }) || [],
  };
};
