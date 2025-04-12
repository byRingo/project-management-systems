import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./get-tasks.ts";

export const useFetchTasks = () => {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["tasks-controller/tasks"],
    queryFn: getTasks,
    //Запрос отрабатывает только по вызову функции refetch
    enabled: false,
  });
  return { data, error, isFetching, refetch };
};
