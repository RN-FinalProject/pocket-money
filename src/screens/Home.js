import React from "react";
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

const TotalText = styled.Text`
  color: #656565;
  font-size: 20px;
  font-weight: 500;
`;

const Total = styled.Text`
  font-size: 48px;
  font-weight: 900;
  color: ${({ theme }) => theme.positive};
`;

const PriceContainer = styled.View`
  background-color: ${({ theme }) => theme.white};
  justify-content: center;
  border-radius: 17px;
  padding: 20px;
  margin: 40px 0px;
  width: 383px;
  height: 164px;
  flex-direction: row;
`;

const PriceContainer2 = styled.View`
  flex:1;
`;

const StrPrice = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.black};
`;

const NumPrice = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.black};
`;


//total - 총금액, deposit - 입금, withdraw - 출금
const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Image source={images.pocket} />
        <TotalText>거래내역</TotalText>
        <Total>300000원</Total>
        <PriceContainer>
          <PriceContainer2>
            <StrPrice>입금</StrPrice>
            <NumPrice>1000000000</NumPrice>
          </PriceContainer2>
          <PriceContainer2>
            <StrPrice>출금</StrPrice>
            <NumPrice>2000000000</NumPrice>
          </PriceContainer2>
        </PriceContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
