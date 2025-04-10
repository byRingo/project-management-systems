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

export const BoardPage = () => {
  const id = useParams();
  const initialData = useGetBoardData(id?.boardId as unknown as number);
  const { refetch } = useFetchBoard(id?.boardId as unknown as number);
  const [tasks, setTasks] = useState(initialData);

  useEffect(() => {
    if (JSON.stringify(initialData) !== JSON.stringify(tasks)) {
      setTasks(initialData);
    }
  }, [id.boardId, initialData, tasks]);

  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;
    const taskId = result.draggableId.substring(
      0,
      result.draggableId.length - 1,
    );
    if (!destination) return;

    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;

    if (sourceColumn === destinationColumn) {
      const columnTasks = Array.from(tasks[sourceColumn as keyof typeof tasks]);
      const [removed] = columnTasks.splice(source.index, 1);
      columnTasks.splice(destination.index, 0, removed);

      setTasks((prevState) => ({
        ...prevState,
        [sourceColumn]: columnTasks,
      }));
    } else {
      const sourceColumnTasks = Array.from(
        tasks[sourceColumn as keyof typeof tasks],
      );
      const [removed] = sourceColumnTasks.splice(source.index, 1);

      const destinationColumnTasks = Array.from(
        tasks[destinationColumn as keyof typeof tasks],
      );
      destinationColumnTasks.splice(destination.index, 0, removed);

      setTasks((prevState) => ({
        ...prevState,
        [sourceColumn]: sourceColumnTasks,
        [destinationColumn]: destinationColumnTasks,
      }));

      setTasks((prevState) => ({
        ...prevState,
        [sourceColumn]: sourceColumnTasks,
      }));

      await updateTaskStatus(+taskId, { status: destinationColumn }).then(() =>
        refetch(),
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "100px",
        }}
      >
        {Object.keys(tasks)?.map((column) => (
          <Droppable key={column} droppableId={column}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  width: "200px",
                  backgroundColor: "#f4f5f7",
                  padding: "8px",
                  borderRadius: "4px",
                }}
              >
                <h3>{column.charAt(0).toUpperCase() + column.slice(1)}</h3>
                {tasks[column as keyof typeof tasks]?.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                        }}
                      >
                        {task.id}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};
