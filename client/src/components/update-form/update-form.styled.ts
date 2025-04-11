import styled from "styled-components";
import { Select } from "antd";

export const StyledSelect = styled(Select)`
  &.ant-select-disabled {
    .ant-select-selector {
      //important лучше не использовать, но нет времени разбираться в специфичности
      color: black !important;
      background: white !important;
    }
  }
`;
