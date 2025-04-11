import { ITaskPriorityProps } from "./types.ts";
import EqualIcon from "../icons/EqualIcon.svg";
import LineDownIcon from "../icons/LineDownIcon.svg";
import LineUpIcon from "../icons/LineUpIcon.svg";
import { TaskPriorityStyled } from "./task-priority.styled.ts";

export const TaskPriority = ({ taskPriority }: ITaskPriorityProps) => {
  return (
    <TaskPriorityStyled>
      {taskPriority === "Low" && <img src={EqualIcon} alt="Low Priority" />}
      {taskPriority === "High" && <img src={LineUpIcon} alt="High Priority" />}
      {taskPriority === "Medium" && (
        <img src={LineDownIcon} alt="Medium Priority" />
      )}
    </TaskPriorityStyled>
  );
};
