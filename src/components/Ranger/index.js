import React, { useState } from "react";
import { Box } from "@xstyled/styled-components";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import Slider from "rc-slider";
import { formatter } from "../../commons/function";
import themes from "../../commons/variables";

const StyleInput = styled(Form.Control)`
  font-weight: bold;
  padding: 4px 4px;
  border: thin solid #e1e1e1;
  &:focus {
    outline: none;
    border-color: #f37223;
    box-shadow: none;
  }
`;

const CustomSlider = styled(Slider)`
  .rc-slider-handle:active {
    box-shadow: none;
  }
  ${"" /* .rc-slider-handle:hover {
    transform: scale(1.5);
    transition: transform 0.2s linear;
  } */}
`;

const Ranger = React.memo(
  ({
    title,
    value,
    onChange,
    onChangeRange,
    min,
    max,
    unit,
    step = 1,
    widthInput = "100px"
  }) => {
    const [focus, setFocus] = useState(false);

    const handleOnBlur = e => {
      e.preventDefault();
      setFocus(false);
    };

    const handleOnFocus = e => {
      e.preventDefault();
      setFocus(true);
    };

    return (
      <>
        <Box display="flex" alignItems="center" mb={3}>
          <Box display="inline-block" px={3} py={0}>{title}</Box>
          <Box width="20px" />
          <StyleInput
            type="number"
            value={value || ""}
            autoFocus={focus}
            onChange={onChange}
            onBlur={e => handleOnBlur(e)}
            onFocus={e => handleOnFocus(e)}
            style={{ maxWidth: widthInput }}
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
            onChange={onChangeRange}
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
);

export default Ranger;
