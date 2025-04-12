import { Button, Tooltip } from "antd";
import { ITasksProps } from "./types.ts";
import {
  PropertyName,
  TaskDescription,
  TaskItemProperty,
  TaskItemStyled,
  TaskItemWrapper,
  TaskStatus,
  TaskTitle,
  TaskTitleWrapper,
} from "./task-item.styled.ts";
import { UserPhoto } from "../user-photo/UserPhoto.tsx";
import { TaskPriority } from "../task-priority/TaskPriority.tsx";

export const TaskItem = ({
  title,
  status,
  onItemClick,
  onButtonClick,
  assignee,
  description,
  priority,
  boardId,
}: ITasksProps) => {
  return (
    <TaskItemStyled onClick={onItemClick}>
      <TaskItemWrapper>
        <TaskItemProperty>
          <PropertyName>Приоритет</PropertyName>
          <TaskPriority taskPriority={priority} />
        </TaskItemProperty>
        <TaskItemProperty>
          <PropertyName>Статус</PropertyName>
          <TaskStatus>{status}</TaskStatus>
        </TaskItemProperty>
        <TaskTitleWrapper>
          <TaskTitle>{title}</TaskTitle>
          <TaskDescription>{description}</TaskDescription>
        </TaskTitleWrapper>
      </TaskItemWrapper>
      <TaskItemWrapper>
        <Button onClick={() => onButtonClick(boardId)}>Перейти к доске</Button>
        <Tooltip title={`Исполнитель: ${assignee.fullName}`}>
          <div>
            <UserPhoto
              userImgUrl={assignee.avatarUrl}
              width={"1.25rem"}
              height={"1.25rem"}
            />
          </div>
        </Tooltip>
      </TaskItemWrapper>
    </TaskItemStyled>
  );
};
