import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./get-tasks.ts";

export const useFetchTasks = () => {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["tasks-controller/tasks"],
    queryFn: getTasks,
  });
  return { data, error, isFetching, refetch };
};
