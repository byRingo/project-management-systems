import { useFetchBoard } from "../../queries/boards-controller/get-board/use-fetch-board.ts";

//Хук для получения и приведения данных выбранной доски к нужному формату
export const useGetBoardData = (boardId: number) => {
  const { data: boardData } = useFetchBoard(boardId);

  return {
    //Фильтруем задачи по каждому статусу и приводим id к строке для реализации DnD
    Backlog:
      boardData
        ?.filter((board) => board.status === "Backlog")
        .map((board) => {
          return {
            ...board,
            id: `${board.id}`,
          };
        }) || [],
    InProgress:
      boardData
        ?.filter((board) => board.status === "InProgress")
        .map((board) => {
          return {
            ...board,
            id: `${board.id}`,
          };
        }) || [],
    Done:
      boardData
        ?.filter((board) => board.status === "Done")
        .map((board) => {
          return {
            ...board,
            id: `${board.id}`,
          };
        }) || [],
  };
};
