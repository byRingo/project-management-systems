import { AvitoBackendApiRequest } from "../../../../core/api/avito-backend-api.ts";
import { IBoardItem } from "./types.ts";

export const getBoards = async () => {
  const { data } = await AvitoBackendApiRequest.get<IBoardItem>("boards");

  return data.data;
};
