import { Spin } from "antd";
import { CustomSpinStyled } from "./custom-spin.styled.ts";

export const CustomSpin = () => {
  return (
    <CustomSpinStyled>
      <Spin size="large" />
    </CustomSpinStyled>
  );
};
