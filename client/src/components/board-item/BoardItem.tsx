import {Button} from "antd";
import {IBoardItemProps} from "./types.ts";

export const BoardItem = ({description, name, taskCount, id}: IBoardItemProps) => {
    return (
        <div style={{border: "1px solid black", borderRadius: "8px", display: "flex", justifyContent: "space-evenly"}}>
            <span>{name}</span>
            <span>{description}</span>
            <span>{taskCount}</span>
            <span>{id}</span>
            <Button>Перейти к проекту</Button>
        </div>
    );
};
