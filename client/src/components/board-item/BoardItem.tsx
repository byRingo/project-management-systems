import { Button } from "antd";
import { IBoardItemProps } from "./types.ts";
import {
  BoardDescription,
  BoardName,
  BoardTaskCounter,
  BoardWrapper,
  StyledBoardItem,
} from "./board-item.styled.ts";

export const BoardItem = ({
  description,
  name,
  taskCount,
  id,
  onClick,
}: IBoardItemProps) => {
  return (
    <StyledBoardItem>
      <BoardWrapper>
        <BoardName>{name}</BoardName>
        <BoardDescription>{description}</BoardDescription>
      </BoardWrapper>
      <BoardWrapper>
        <Button onClick={() => onClick(id)}>Перейти к проекту</Button>
        <BoardTaskCounter>Количество задач: {taskCount}</BoardTaskCounter>
      </BoardWrapper>
    </StyledBoardItem>
  );
};
