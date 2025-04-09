import { AvitoBackendApiRequest } from "../../../../core/api/avito-backend-api.ts";
import { ITaskBody } from "./types.ts";

export const postTask = async (body: ITaskBody) => {
  const { data } = await AvitoBackendApiRequest.post<{ data: { id: number } }>(
    "tasks/create",
    body,
  );

  return data.data;
};
