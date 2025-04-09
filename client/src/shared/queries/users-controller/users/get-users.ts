import { AvitoBackendApiRequest } from "../../../../core/api/avito-backend-api.ts";
import { IUsers } from "./types.ts";

export const getUsers = async () => {
  const { data } = await AvitoBackendApiRequest.get<IUsers>("users");

  return data.data;
};
