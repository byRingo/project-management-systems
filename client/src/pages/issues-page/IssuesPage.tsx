import { useFetchTasks } from "../../shared/queries/tasks-controller/get-tasks/use-fetch-tasks.ts";
import { TaskItem } from "../../components/task-item/TaskItem.tsx";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { Menu, MenuProps } from "antd";
import { UpdateForm } from "../../components/update-form/UpdateForm.tsx";

const STATUSES = [
  { key: "", label: "Все" },
  { key: "Done", label: "Done" },
  { key: "InProgress", label: "In Progress" },
  { key: "Backlog", label: "In Backlog" },
];

const items = [
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

export const IssuesPage = () => {
  const [selectedTask, setSelectedTask] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    text: "",
    statuses: "",
    boardId: "",
  });
  const { data: tasks, isFetching } = useFetchTasks();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleTaskClick = (taskId: number) => {
    setSelectedTask(taskId);
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
      {selectedTask}
      <Search
        style={{ width: "100px" }}
        value={filters.text}
        onChange={(e) => updateFilter("text", e.target.value)}
      />
      <Menu style={{ width: "150px" }} items={items} onClick={toggleStatus} />
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
              onClick={() => handleTaskClick(taskItem?.id)}
            />
          );
        })}
        {!filteredTasks?.length && <div>Задачи не найдены</div>}
        <UpdateForm
          taskId={selectedTask}
          isModalOpen={isModalOpen}
          onCancel={handleCancel}
        />
      </div>
    </>
  );
};
