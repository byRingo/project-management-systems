import { AvitoBackendApiRequest } from "../../../../core/api/avito-backend-api.ts";
import { IBoards } from "./types.ts";

export const getBoards = async () => {
  const { data } = await AvitoBackendApiRequest.get<IBoards>("boards");

  return data.data;
};
