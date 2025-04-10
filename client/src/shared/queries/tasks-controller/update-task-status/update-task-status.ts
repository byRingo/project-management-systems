import { AvitoBackendApiRequest } from "../../../../core/api/avito-backend-api.ts";

export const updateTaskStatus = async (
  taskId: number,
  body: { status: string },
) => {
  const { data } = await AvitoBackendApiRequest.put<{ message: string }>(
    `tasks/updateStatus/${taskId}`,
    body,
  );

  return data;
};
