import React from "react";
import { theme } from "../theme";
import styled, { ThemeProvider } from "styled-components/native";
import { StatusBar } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.black};
  font-size: 28px;
  font-weight: 700;
  align-self: flex-start;
  margin: 0px 20px;
`;

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={theme.background}
        ></StatusBar>
        <Title>용돈 통장</Title>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
