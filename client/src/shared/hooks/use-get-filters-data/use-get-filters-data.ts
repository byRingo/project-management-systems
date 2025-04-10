import { useFetchBoards } from "../../queries/boards-controller/get-boards/use-fetch-boards.ts";

export const STATUSES = [
  { key: "", label: "Все" },
  { key: "Done", label: "Done" },
  { key: "InProgress", label: "In Progress" },
  { key: "Backlog", label: "In Backlog" },
];

export const useGetFiltersData = () => {
  const { data: projects } = useFetchBoards();

  const projectsData =
    projects?.map((project) => {
      return {
        key: project.id as unknown as string,
        label: project.name,
      };
    }) || [];
  projectsData.unshift({ key: "", label: "Все" });

  const projectFilter = [
    {
      key: "taskProject",
      label: "Проект",
      children: projectsData,
    },
  ];

  const statusFilter = [
    {
      key: "tasksStatus",
      label: "Статус задачи",
      children: [
        { key: "0", label: "Все" },
        { key: "1", label: STATUSES[1].label },
        { key: "2", label: STATUSES[2].label },
        { key: "3", label: STATUSES[3].label },
      ],
    },
  ];

  return { projectFilter, statusFilter };
};
