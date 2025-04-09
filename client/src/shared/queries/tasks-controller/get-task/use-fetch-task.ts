import { useQuery } from "@tanstack/react-query";
import { getTask } from "./get-task.ts";

export const useFetchTask = (taskId: number | null) => {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["tasks-controller/task", taskId],
    queryFn: () => {
      return getTask(taskId);
    },
    enabled: !!taskId,
  });
  return { data, error, isFetching, refetch };
};
