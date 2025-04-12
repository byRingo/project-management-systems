import client from "./client.ts";
import { AVITO_BACKEND_BASEPATH } from "../consts/avito-backend-basepath.ts";

export const AvitoBackendApiRequest = {
  get: <T>(method: string) => {
    return client.get<T>(`${AVITO_BACKEND_BASEPATH}/${method}`);
  },
  post: <T, P = unknown>(method: string, params?: P) => {
    return client.post<T>(`${AVITO_BACKEND_BASEPATH}/${method}`, params);
  },
  delete: <T, D = unknown>(method: string, data?: D) => {
    return client.delete<T>(`${AVITO_BACKEND_BASEPATH}/${method}`, { data });
  },
  put: <T, P = unknown>(method: string, params?: P) => {
    return client.put<T>(`${AVITO_BACKEND_BASEPATH}/${method}`, params);
  },
};
