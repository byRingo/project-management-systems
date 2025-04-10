import { useFetchTasks } from "../../shared/queries/tasks-controller/get-tasks/use-fetch-tasks.ts";
import { TaskItem } from "../../components/task-item/TaskItem.tsx";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { Menu, MenuProps } from "antd";
import { UpdateForm } from "../../components/update-form/UpdateForm.tsx";
import {
  STATUSES,
  useGetFiltersData,
} from "../../shared/hooks/use-get-filters-data/use-get-filters-data.ts";

export const IssuesPage = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    text: "",
    statuses: "",
    boardId: "",
  });
  const { data: tasks, isFetching, refetch } = useFetchTasks();

  const { projectFilter, statusFilter } = useGetFiltersData();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleTaskClick = (taskId: number) => {
    setSelectedTaskId(taskId);
    showModal();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleStatus: MenuProps["onClick"] = (status) => {
    const newStatus = STATUSES[+status.key].key;
    setFilters((prev) => ({
      ...prev,
      statuses: newStatus ? newStatus : "",
    }));
  };

  const toggleProject: MenuProps["onClick"] = (status) => {
    setFilters((prev) => ({
      ...prev,
      boardId: status.key,
    }));
  };

  const filteredTasks = tasks?.filter((task) => {
    const searchText = filters.text.toLowerCase();

    const conditions = [
      () =>
        task.title.toLowerCase().includes(searchText) ||
        task.assignee.fullName.toLowerCase().includes(searchText),

      () => filters.statuses === "" || filters.statuses.includes(task.status),

      () =>
        filters.boardId === "" ||
        filters.boardId.includes(task.boardId.toString()),
    ];

    return conditions.every((condition) => condition());
  });

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Search
        style={{ width: "100px" }}
        value={filters.text}
        onChange={(e) => updateFilter("text", e.target.value)}
      />
      <Menu
        style={{ width: "150px" }}
        items={statusFilter}
        onClick={toggleStatus}
      />
      <Menu
        style={{ width: "150px" }}
        items={projectFilter}
        onClick={toggleProject}
      />
      <div
        style={{
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {filteredTasks?.map((taskItem) => {
          return (
            <TaskItem
              status={taskItem.status}
              title={taskItem.title}
              key={`${taskItem.title} + ${taskItem.id}`}
              onClick={() => handleTaskClick(taskItem?.id as unknown as number)}
            />
          );
        })}
        {!filteredTasks?.length && <div>Задачи не найдены</div>}
        <UpdateForm
          taskId={selectedTaskId}
          isModalOpen={isModalOpen}
          handleModalClose={handleCancel}
          tasksRefetch={refetch}
        />
      </div>
    </>
  );
};
