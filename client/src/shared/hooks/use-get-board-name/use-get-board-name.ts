import { useFetchBoards } from "../../queries/boards-controller/get-boards/use-fetch-boards.ts";

//Хук для получения названия выбранной доски
export const useGetBoardName = (boardId: number) => {
  const { data: boardData } = useFetchBoards();
  //Находим доску по id
  return boardData?.find((board) => board.id === +boardId)?.name || null;
};
