import { AvitoBackendApiRequest } from "../../../../core/api/avito-backend-api.ts";
import { ITasks } from "../../tasks-controller/get-tasks/types.ts";

export const getBoard = async (boardId: number) => {
  const { data } = await AvitoBackendApiRequest.get<ITasks>(
    //Кладем boardId, т.к это изменяемый параметр, запрос будет понимать когда ему нужно рефетчиться
    `boards/${boardId}`,
  );

  return data.data;
};
