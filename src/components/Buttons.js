import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import theme from "../theme";

// 버튼 사용법
// <Button
//     title="텍스트 내용"
//     textColor={theme.white} 또는 "#지정색" 기본값 theme.white
//     fontSize = "xxpx"
//     width= "지정값px" 기본값은 173px
//     heigth="지정값px" 기본값은 65px
//     backgroundColor={theme.white}또는 "#지정색" 기본값은 theme.positive
//     borderColor= {theme.white} 또는 "#지정색" 기본값 none
//     >
// </Button>

const ButtonContainer = styled.TouchableOpacity`
  width: ${({ width }) => width || "173px"};
  height: ${({ height }) => height || "65px"};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.positive};
  border: ${({ borderColor }) => borderColor || "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "25px"};
  align-items: center;
  justify-content: center;
  margin: 6px;
`;
const ButtonText = styled.Text`
  color: ${({ textColor }) => textColor || "#fff"};
  font-size: ${({ fontSize }) => fontSize || "28px"};
`;
export const Button = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonContainer
        width={props.width}
        height={props.height}
        borderColor={props.borderColor}
        backgroundColor={props.backgroundColor}
        borderRadius={props.borderRadius}
      >
        <ButtonText textColor={props.textColor} fontSize={props.fontSize}>
          {props.children || props.title}
        </ButtonText>
      </ButtonContainer>
    </ThemeProvider>
  );
};
Button.defaultProps = {
  title: "",
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
};
