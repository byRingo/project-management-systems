import { Button } from "antd";
import { ITasksProps } from "./types.ts";

export const TaskItem = ({ title, status, onClick }: ITasksProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <span>{title}</span>
      <span>{status}</span>
      <Button>Перейти к доске</Button>
    </div>
  );
};
