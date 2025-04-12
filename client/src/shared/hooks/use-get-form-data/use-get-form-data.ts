import { useFetchUsers } from "../../queries/users-controller/users/use-fetch-users.ts";
import { useFetchBoards } from "../../queries/boards-controller/get-boards/use-fetch-boards.ts";

//Хук для автозаполнения данных формы редактирования
export const useGetFormData = () => {
  const { data: users } = useFetchUsers();
  const { data: projects } = useFetchBoards();
  //Данные для Select по пользователю со всеми существующими пользователями
  const usersData = users?.map((user) => {
    return {
      value: user.id,
      label: user.fullName,
      imgUrl: user.avatarUrl,
    };
  });
  //Данные для Select по проекту со всеми существующими проектами
  const projectsData = projects?.map((project) => {
    return {
      value: project.id,
      label: project.name,
    };
  });
  //Данные для Select по приоритету со всеми существующими приоритетами
  const prioritiesData = [
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];
  //Данные для Select по статусу со всеми существующими статусами
  const statusesData = [
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
