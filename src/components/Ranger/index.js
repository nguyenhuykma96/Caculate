import React from "react";
import { Box } from "@xstyled/styled-components";
import styled from "styled-components";
import Slider from "rc-slider";
import { formatter } from "../../commons/function";
import themes from "../../commons/variables";
import Input from "./Input"
 
const CustomSlider = styled(Slider)`
  .rc-slider-handle:active {
    box-shadow: none;
  }
  ${"" /* .rc-slider-handle:hover {
    transform: scale(1.5);
    transition: transform 0.2s linear;
  } */}
`;

const Ranger = 
  ({
    name,
    title,
    value,
    onChange,
    onChangeRange,
    min,
    max,
    unit,
    step = 1,
  }) => {

    const handleOnChange = (e) => {
      onChange(e);
    }

    return (
      <>
        <Box display="flex" alignItems="center" mb={3}>
          <Box display="inline-block" px={3} py={0}>{title}</Box>
          <Box width="20px" />
          <Input
            name={name}
            value={value}
            onChange={handleOnChange}
            widthInput = "100px"

          />
         
        </Box>
        <Box display="flex" alignItems="center">
          <Box className="mr-2" minWidth="100px" textAlign="right">
            {min} <span>{unit || ""}</span>
          </Box>
          <CustomSlider
            allowCross={false}
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(value) => onChangeRange(value)}
            handleStyle={{
              backgroundColor: themes.colors.orange,
              border: 0,
              width: "20px",
              height: "20px",
              marginTop: "-9px"
            }}
            trackStyle={{
              background: themes.colors.orange
            }}
            railStyle={{
              backgroundColor: themes.colors.border
            }}
          />
          <Box className="ml-2" minWidth="100px">
            {formatter.format(max)} <span>{unit || ""}</span>
          </Box>
        </Box>
      </>
    );
  }


export default React.memo(Ranger);


