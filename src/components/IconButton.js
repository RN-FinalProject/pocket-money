import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { images } from "../images";

const Icon = styled.Image`
  tint-color: ${({ theme }) => theme.black};
  width: 30px;
  height: 30px;
  margin: 5px;
`;

const IconButton = ({ type, onPressOut }) => {
  return (
    <TouchableOpacity onPressOut={onPressOut}>
      <Icon source={type}></Icon>
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: PropTypes.func,
};
export default IconButton;
