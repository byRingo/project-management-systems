import { useFetchBoards } from "../../shared/queries/boards-controller/get-boards/use-fetch-boards.ts";
import { BoardItem } from "../../components/board-item/BoardItem.tsx";

export const BoardsPage = () => {
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
