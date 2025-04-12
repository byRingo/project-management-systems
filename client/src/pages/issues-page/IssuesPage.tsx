import { useFetchTasks } from "../../shared/queries/tasks-controller/get-tasks/use-fetch-tasks.ts";
import { TaskItem } from "../../components/task-item/TaskItem.tsx";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { Button, Menu, MenuProps } from "antd";
import { UpdateForm } from "../../components/update-form/UpdateForm.tsx";
import {
  STATUSES,
  useGetFiltersData,
} from "../../shared/hooks/use-get-filters-data/use-get-filters-data.ts";
import {
  ContentWrapper,
  FilterTitle,
  IssuesPageBody,
  IssuesPageFilters,
  IssuesPageFiltersWrapper,
  IssuesPageStyled,
  TasksContainer,
} from "./issues-page.styled.ts";
import { CustomSpin } from "../../components/custom-spin/CustomSpin.tsx";
import { useNavigate } from "react-router-dom";
import { CreateForm } from "../../components/create-form/CreateForm.tsx";
import { useGetFilteredTasks } from "../../shared/hooks/use-get-filtered-tasks/use-get-filtered-tasks.ts";

export const IssuesPage = () => {
  const navigate = useNavigate();

  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    //Объект сохраняющий состояние фильтров
    text: "",
    statuses: "",
    boardId: "",
  });

  const { data: tasks, isFetching, refetch } = useFetchTasks();
  const filteredTasks = useGetFilteredTasks(tasks ?? [], filters);
  const { projectFilter, statusFilter } = useGetFiltersData();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const hanldeItemClick = (id: number) => {
    navigate(`/boards/${id}`);
  };

  const showCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCreateModalCancel = () => {
    setIsCreateModalOpen(false);
  };

  const showUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const handleTaskClick = (taskId: number) => {
    setSelectedTaskId(taskId);
    showUpdateModal();
  };

  const handleUpdateModalCancel = () => {
    setIsUpdateModalOpen(false);
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

  if (isFetching) {
    return <CustomSpin />;
  }

  return (
    <IssuesPageStyled style={{ minHeight: "92vh" }}>
      <IssuesPageFilters>
        <Search
          style={{ width: "18.75rem" }}
          placeholder="Название проекта или исполнитель..."
          value={filters.text}
          onChange={(e) => updateFilter("text", e.target.value)}
        />
        <Menu
          style={{ width: "12.5rem" }}
          items={statusFilter}
          onClick={toggleStatus}
        />
        <Menu
          style={{ width: "9.375rem" }}
          items={projectFilter}
          onClick={toggleProject}
        />
      </IssuesPageFilters>
      <IssuesPageBody>
        <ContentWrapper>
          <IssuesPageFiltersWrapper>
            {filters.statuses && (
              <FilterTitle>Статус: {filters.statuses}</FilterTitle>
            )}
            {filters.boardId && (
              //Название проекта берем из структуры данных по выбранному boardId
              <FilterTitle>
                Проект:
                {projectFilter[0].children[+filters?.boardId]?.label || ""}
              </FilterTitle>
            )}
          </IssuesPageFiltersWrapper>
          <TasksContainer>
            {filteredTasks?.map((taskItem) => {
              return (
                <TaskItem
                  priority={taskItem.priority}
                  description={taskItem.description}
                  assignee={taskItem.assignee}
                  status={taskItem.status}
                  title={taskItem.title}
                  key={`${taskItem.id} ${taskItem.title}`}
                  onItemClick={() => handleTaskClick(+taskItem?.id)}
                  boardId={+taskItem.boardId}
                  onButtonClick={hanldeItemClick}
                />
              );
            })}
            {!filteredTasks?.length && <div>Задачи не найдены</div>}
          </TasksContainer>
          <Button onClick={showCreateModal}>Создать задачу</Button>
        </ContentWrapper>
      </IssuesPageBody>
      <UpdateForm
        taskId={selectedTaskId}
        isModalOpen={isUpdateModalOpen}
        handleModalClose={handleUpdateModalCancel}
        tasksRefetch={refetch}
      />
      <CreateForm
        isModalOpen={isCreateModalOpen}
        onCancel={handleCreateModalCancel}
      />
    </IssuesPageStyled>
  );
};
