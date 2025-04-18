import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./get-users.ts";

export const useFetchUsers = () => {
  const { data, error, isFetching } = useQuery({
    queryKey: ["users-controller/users"],
    queryFn: () => {
      return getUsers();
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return { data, error, isFetching };
};
