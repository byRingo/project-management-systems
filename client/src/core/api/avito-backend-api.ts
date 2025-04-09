import client from "./client.ts";
import { AVITO_BACKEND_BASEPATH } from "../consts/avito-backend-basepath.ts";

export const AvitoBackendApiRequest = {
  get: <T>(method: string) => {
    return client.get<T>(`${AVITO_BACKEND_BASEPATH}/${method}`);
  },
  post: <T>(method: string, params?: any) => {
    return client.post<T>(`${AVITO_BACKEND_BASEPATH}/${method}`, params);
  },
  delete: <T>(method: string, data?: any) => {
    return client.delete<T>(`${AVITO_BACKEND_BASEPATH}/${method}`, data);
  },
  put: <T>(method: string, params?: any) => {
    return client.put<T>(`${AVITO_BACKEND_BASEPATH}/${method}`, params);
  },
};
