import { useFetchBoards } from "../../shared/queries/boards-controller/get-boards/use-fetch-boards.ts";
import { BoardItem } from "../../components/board-item/BoardItem.tsx";
import { useNavigate } from "react-router-dom";
import { CustomSpin } from "../../components/custom-spin/CustomSpin.tsx";
import { BoardsPageStyled, BoardsPageWrapper } from "./boards-page.styled.ts";

//Страница всех проектов
export const BoardsPage = () => {
  const { data: boards, isFetching } = useFetchBoards();
  const navigate = useNavigate();

  const handleBoardClick = (id: number) => {
    navigate(`/boards/${id}`);
  };

  if (isFetching) {
    return <CustomSpin />;
  }

  return (
    <BoardsPageStyled>
      <BoardsPageWrapper>
        {boards?.map((boardItem) => {
          return (
            <BoardItem
              key={`${boardItem.id} ${boardItem.name}`}
              name={boardItem.name}
              description={boardItem.description}
              id={boardItem.id}
              taskCount={boardItem.taskCount}
              onClick={handleBoardClick}
            />
          );
        })}
      </BoardsPageWrapper>
    </BoardsPageStyled>
  );
};
