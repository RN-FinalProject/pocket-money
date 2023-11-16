import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import {  Text as BaseText } from "react-native";
import { theme } from "../theme";
import BigInput from "../components/Input";
import DateInput from "../components/DateInput";

//styled-component View
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};

`;

const Text = styled(BaseText)`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: 500;
`;

const Write = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>날짜</Text>
        <DateInput/>
        <Text>입출금</Text>
        <Text>내용</Text>
        <BigInput/>
        <Text>금액</Text>
        <BigInput/>
      </Container>
    </ThemeProvider>
  );
};

export default Write;
