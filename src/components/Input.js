import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import PropTypes from "prop-types";
const InputContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-vertical: 10px;
`;

const StyledBigInput = styled.TextInput`
  width: ${({ width }) => width - 60}px;
  height: 72px;
  border-radius: 17px;
  margin: 3px 0px;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.white};
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  justify-content: center;
  align-items: center;
  margin: 3px 0px;
`;

const BigInput = (props) => {
  const width = Dimensions.get("window").width;
  return (
    <InputContainer>
      <StyledBigInput width={width} placeholder={props.placeholder} />
    </InputContainer>
  );
};

BigInput.propTypes = {
  placeholder: PropTypes.string,
};
export default BigInput;
