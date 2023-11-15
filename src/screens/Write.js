import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { Text } from "react-native";
import { theme } from "../theme";

//styled-component View
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Write = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>거래내역 입력</Text>
      </Container>
    </ThemeProvider>
  );
};

export default Write;
