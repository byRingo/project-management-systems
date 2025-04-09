import { useFetchBoards } from "../../shared/queries/boards-controller/boards/use-fetch-boards.ts";
import { BoardItem } from "../../components/board-item/BoardItem.tsx";

export const BoardPage = () => {
  const { data: boards, isFetching } = useFetchBoards();

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {boards?.map((boardItem) => {
        return (
          <BoardItem
            key={`${boardItem.id} ${boardItem.name}`}
            name={boardItem.name}
            description={boardItem.description}
            id={boardItem.id}
            taskCount={boardItem.taskCount}
          />
        );
      })}
    </div>
  );
};
