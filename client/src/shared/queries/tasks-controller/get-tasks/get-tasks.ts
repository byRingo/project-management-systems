import { AvitoBackendApiRequest } from "../../../../core/api/avito-backend-api.ts";
import { ITasks } from "./types.ts";

export const getTasks = async () => {
  const { data } = await AvitoBackendApiRequest.get<ITasks>("tasks");

  return data.data;
};
