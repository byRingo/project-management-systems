import styled from "styled-components";

export const TaskItemStyled = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: azure;
  }
`;

export const TaskTitleWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const TaskTitle = styled("div")`
  font-size: 20px;
`;

export const TaskDescription = styled("div")`
  color: gray;
`;

export const TaskStatus = styled("div")`
  height: 30px;
`;

export const TaskItemWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const TaskItemProperty = styled("div")`
  width: 6rem;
  display: flex;
  flex-direction: column;
`;

export const PropertyName = styled("div")`
  font-size: 10px;
  color: gray;
`;
