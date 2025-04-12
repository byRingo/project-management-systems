import styled from "styled-components";

export const IssuesPageStyled = styled("div")`
  background-color: #f3f5f7;
`;

export const IssuesPageFilters = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;
`;

export const IssuesPageBody = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const IssuesPageFiltersWrapper = styled("div")`
  display: flex;
  gap: 1.875rem;
`;

export const FilterTitle = styled("div")`
  font-size: 0.875rem;
`;

export const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  align-items: flex-end;
`;

export const TasksContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 37.375rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
