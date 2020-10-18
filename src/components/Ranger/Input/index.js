import React, {useState} from 'react'
import { Form } from "react-bootstrap";
import styled from "styled-components";


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

function Input({widthInput, value, onChange, name}) {
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
    <StyleInput
      name={name}
      type="number"
      value={value || ""}
      autoFocus={focus}
      onChange={(e) => onChange(e)}
      onBlur={e => handleOnBlur(e)}
      onFocus={e => handleOnFocus(e)}
      style={{ maxWidth: widthInput }}
    />
  )
}

export default Input
