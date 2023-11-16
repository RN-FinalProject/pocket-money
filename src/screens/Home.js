import React from "react";
<<<<<<< Updated upstream
import styled from 'styled-components/native';

const Home = () => {
    <Container>
        home
    </Container>
=======
import styled, { ThemeProvider } from "styled-components/native";
import { Text, Image } from "react-native";
import { theme } from "../theme";
import { images } from "../images";

//styled-component View
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Image source={images.pocket}/>
        <Text>거래내역</Text>
      </Container>
    </ThemeProvider>
  );
>>>>>>> Stashed changes
};

export default Home;