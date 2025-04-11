import styled from "styled-components";

export const StyledBoardItem = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 16px;

  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BoardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const BoardName = styled("div")`
  font-size: 20px;
`;

export const BoardDescription = styled("div")`
  color: gray;
`;

export const BoardTaskCounter = styled("div")`
  font-size: 14px;
`;
