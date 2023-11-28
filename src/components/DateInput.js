import React, { useState } from "react";
import styled from "styled-components/native";

const StyledSmallInput = styled.TextInput`
  width: 112px;
  height: 46px;
  border-radius: 17px;
  margin: 3px 5px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.white};
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  justify-content: center;
  align-items: center;
`;

const DateInput = (props) => {
  return (
    <StyledSmallInput
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      keyboardType={props.keyboardType}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

export default DateInput;
