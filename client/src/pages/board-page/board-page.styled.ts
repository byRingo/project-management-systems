import styled from "styled-components";

export const BoardWrapper = styled("div")`
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  padding: 1.5rem;
`;

export const BoardColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const BoardTitle = styled("div")`
  font-size: 1.25rem;
`;

export const TaskDescription = styled("div")`
  font-size: 0.75rem;
  color: gray;
`;

export const TaskFooter = styled("div")`
  display: flex;
  justify-content: space-between;
`;
