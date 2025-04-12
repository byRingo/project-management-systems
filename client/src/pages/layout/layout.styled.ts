import styled from "styled-components";
import { Link } from "react-router-dom";

export const LayoutHeaderWrapper = styled("header")`
  display: flex;
  background-color: #456eb5;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.25rem;
`;

export const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  &.visited {
    color: white;
  }
`;
