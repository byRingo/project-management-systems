import styled from "styled-components";

export const StyledBoardItem = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  padding: 1rem;

  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BoardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const BoardName = styled("div")`
  font-size: 1.25rem;
`;

export const BoardDescription = styled("div")`
  color: gray;
`;

export const BoardTaskCounter = styled("div")`
  font-size: 0.875rem;
`;
