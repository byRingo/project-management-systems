import { AvitoBackendApiRequest } from "../../../../core/api/avito-backend-api.ts";
import { ITask } from "../get-tasks/types.ts";

export const getTask = async (taskId: number | null) => {
  const { data } = await AvitoBackendApiRequest.get<ITask>(`tasks/${taskId}`);

  return data.data;
};
