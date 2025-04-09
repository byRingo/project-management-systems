import { useFetchUsers } from "../../queries/users-controller/users/use-fetch-users.ts";
import { useFetchBoards } from "../../queries/boards-controller/boards/use-fetch-boards.ts";

export const useGetFormData = () => {
  const { data: users } = useFetchUsers();
  const { data: projects } = useFetchBoards();
  const usersData = users?.map((user) => {
    return {
      value: user.id,
      label: user.fullName,
      imgUrl: user.avatarUrl,
    };
  });

  const projectsData = projects?.map((project) => {
    return {
      value: project.id,
      label: project.name,
    };
  });

  const prioritiesData = [
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];

  const statusesData = [
    { value: "", label: "" },
    { value: "Done", label: "Done" },
    { value: "InProgress", label: "In Progress" },
    { value: "Backlog", label: "Backlog" },
  ];

  return {
    users: usersData,
    projects: projectsData,
    priorities: prioritiesData,
    statuses: statusesData,
  };
};
