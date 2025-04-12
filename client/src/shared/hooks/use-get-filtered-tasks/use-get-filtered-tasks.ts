import { ITaskItem } from "../../queries/tasks-controller/get-tasks/types.ts";

export const useGetFilteredTasks = (
  tasks: ITaskItem[],
  filters: { text: string; statuses: string; boardId: string },
) => {
  //Фильтрация задач по заданным значениям фильтров
  return tasks?.filter((task) => {
    const searchText = filters.text.toLowerCase();

    const conditions = [
      //Фильтр по проекту или исполнителю
      () =>
        task.title.toLowerCase().includes(searchText) ||
        task.assignee.fullName.toLowerCase().includes(searchText),

      //Фильтр по статусу
      () => filters.statuses === "" || filters.statuses.includes(task.status),

      //Фильтр по доске
      () =>
        filters.boardId === "" ||
        filters.boardId.includes(task.boardId.toString()),
    ];

    return conditions.every((condition) => condition());
  });
};
