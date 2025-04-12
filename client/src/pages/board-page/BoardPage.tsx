import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { useParams } from "react-router-dom";
import { useGetBoardData } from "../../shared/hooks/use-get-board-data/use-get-board-data.ts";
import { updateTaskStatus } from "../../shared/queries/tasks-controller/update-task-status/update-task-status.ts";
import { useFetchBoard } from "../../shared/queries/boards-controller/get-board/use-fetch-board.ts";
import { UserPhoto } from "../../components/user-photo/UserPhoto.tsx";
import { TaskPriority } from "../../components/task-priority/TaskPriority.tsx";
import { Tooltip } from "antd";
import { useGetBoardName } from "../../shared/hooks/use-get-board-name/use-get-board-name.ts";
import { UpdateForm } from "../../components/update-form/UpdateForm.tsx";
import {
  BoardColumnWrapper,
  BoardTitle,
  BoardWrapper,
  TaskDescription,
  TaskFooter,
} from "./board-page.styled.ts";

//Страница проекта
export const BoardPage = () => {
  const id = useParams();
  const boardId = +(id.boardId ?? 0);

  const boardData = useGetBoardName(boardId);
  const initialData = useGetBoardData(boardId);
  const { refetch: refetchBoard } = useFetchBoard(boardId);

  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState(initialData);

  //Хук для обновления задач проекта
  useEffect(() => {
    if (JSON.stringify(initialData) !== JSON.stringify(tasks)) {
      setTasks(initialData);
    }
  }, [id.boardId, initialData, refetchBoard, tasks]);

  useEffect(() => {
    refetchBoard();
  }, [refetchBoard]);

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

  /**
   * @param result - Drag Event, содержащий источник, направление и ID перетаскиваемого компонента
   */
  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;
    const taskId = result.draggableId;

    //Если не перенесли карточку в столбец
    if (!destination) return;

    const sourceColumn = source.droppableId; //ID колонны из которой был взят компонент
    const destinationColumn = destination.droppableId; //ID колонны в которую был взят компонент

    //Если компонент был перенесен в исходную колонну
    if (sourceColumn === destinationColumn) {
      //Создаем копию задач, чтобы избежать мутаций
      const columnTasks = Array.from(tasks[sourceColumn as keyof typeof tasks]);

      //Убираем задачу, которую перетащили
      const [removed] = columnTasks.splice(source.index, 1);
      //Добавляем задачу в новую колонну
      columnTasks.splice(destination.index, 0, removed);
    } else {
      //Создаем копию задачи в изначальной колонне
      const sourceColumnTasks = Array.from(
        tasks[sourceColumn as keyof typeof tasks],
      );
      //Убираем задачу
      const [removed] = sourceColumnTasks.splice(source.index, 1);

      //Делаем копию колонны в которую добавили задачу
      const destinationColumnTasks = Array.from(
        tasks[destinationColumn as keyof typeof tasks],
      );
      //Добавляем задачу
      destinationColumnTasks.splice(destination.index, 0, removed);

      //Обновляем состояние задач
      setTasks((prevState) => ({
        ...prevState,
        [sourceColumn]: sourceColumnTasks,
        [destinationColumn]: destinationColumnTasks,
      }));
      //Обновляем состояние задач
      await updateTaskStatus(+taskId, { status: destinationColumn }).then(() =>
        refetchBoard(),
      );
    }
  };

  //Компонент написан не лучшим образом, первый опыт работы с DnD, советую сесть перед просмотром
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h3 style={{ padding: "0.75rem" }}>{boardData || ""}</h3>
      <BoardWrapper>
        {Object.keys(tasks)?.map((column) => (
          <BoardColumnWrapper key={column}>
            <BoardTitle>
              {column.charAt(0).toUpperCase() + column.slice(1)}
            </BoardTitle>
            <Droppable key={column} droppableId={column}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    width: "25rem",
                    height: "fit-content",
                    backgroundColor: "#f4f5f7",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                  }}
                >
                  {tasks[column as keyof typeof tasks]?.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            //styled стили не работают
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            marginBottom: "0.5rem",
                            backgroundColor: "white",
                            cursor: "pointer",
                            ...provided.draggableProps.style,
                          }}
                          onClick={() => handleTaskClick(+task?.id)}
                        >
                          <span>{task.title}</span>
                          <TaskDescription>{task.description}</TaskDescription>
                          <TaskFooter>
                            <Tooltip title={`Приоритет: ${task.priority}`}>
                              <div>
                                <TaskPriority taskPriority={task.priority} />
                              </div>
                            </Tooltip>
                            <Tooltip
                              title={`Исполнитель: ${task.assignee.fullName}`}
                            >
                              <div>
                                <UserPhoto
                                  userImgUrl={task.assignee.avatarUrl}
                                />
                              </div>
                            </Tooltip>
                          </TaskFooter>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </BoardColumnWrapper>
        ))}
      </BoardWrapper>
      <UpdateForm
        taskId={selectedTaskId}
        isModalOpen={isModalOpen}
        handleModalClose={handleCancel}
        tasksRefetch={refetchBoard}
      />
    </DragDropContext>
  );
};
