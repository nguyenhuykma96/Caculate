import React from "react";
import styled from "styled-components";
import { Box } from "@xstyled/styled-components";

const CustomCard = styled(Box)`
  margin-bottom: 16px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: opacity 0.5s linear;
  .card {
    border: none;
  }
`;
export default function CardCustom({ children, ...others }) {
  return <CustomCard {...others}>{children}</CustomCard>;
}
