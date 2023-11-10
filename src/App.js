import React from "react";
<<<<<<< Updated upstream
import TabNavigation from "./navigations/Tab";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
=======
import { theme } from "./theme";
import styled, { ThemeProvider } from "styled-components/native";
import { StatusBar } from "react-native";

const Container = styled.View`
  flex: 1;
  backgroud-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.black};
  font-size: 28px;
  font-weight: 700;
  align-self: flex-start;
  margin: 0px 20px;
>>>>>>> Stashed changes
`;

const App = () => {
  return (
<<<<<<< Updated upstream
    <Container>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Container>
  );
};

=======
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={theme.background}
        ></StatusBar>
        <Title>Title 페이지마다 다르게</Title>
      </Container>
    </ThemeProvider>
  );
};
>>>>>>> Stashed changes
export default App;
