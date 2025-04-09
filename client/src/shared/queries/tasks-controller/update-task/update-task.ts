import { AvitoBackendApiRequest } from "../../../../core/api/avito-backend-api.ts";
import { ITaskBody } from "../post-task/types.ts";

export const updateTask = async (taskId: number, body: ITaskBody) => {
  const { data } = await AvitoBackendApiRequest.put<{ message: string }>(
    `tasks/update/${taskId}`,
    body,
  );

  return data;
};
