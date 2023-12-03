import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { Text, Image } from "react-native";
import { theme } from "../theme";
import { images } from "../images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
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
  flex: 1;
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
  const navigation = useNavigation();
  const [totalAmount, setTotalAmount] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const fetchData = async () => {
    try {
      // Retrieve data from AsyncStorage
      const storedData = await AsyncStorage.getItem("data");
      if (storedData) {
        // Parse the stored data
        const parsedData = JSON.parse(storedData);

        // Calculate the sum of "amount" values
        const depositSum = Object.values(parsedData).reduce(
          (accumulator, entry) =>
            accumulator +
            (parseFloat(entry.amount) > 0 ? parseFloat(entry.amount) : 0),
          0
        );

        const withdrawSum = Object.values(parsedData).reduce(
          (accumulator, entry) =>
            accumulator +
            (parseFloat(entry.amount) < 0 ? parseFloat(entry.amount) : 0),
          0
        );

        // Update the state with the total amount, deposit, and withdraw
        setTotalAmount(depositSum + withdrawSum);
        setDeposit(depositSum);
        setWithdraw(withdrawSum);
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };
  useEffect(() => {
    // 화면이 포커스될 때마다 loadData 함수 호출
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData();
    });

    // 화면이 언마운트 될 때 구독 해제
    return unsubscribe;
  }, [navigation]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Image source={images.pocket} />
        <TotalText>거래내역</TotalText>
        <Total
          style={{
            color:
              totalAmount > 0
                ? theme.positive
                : totalAmount < 0
                ? theme.negative
                : theme.black,
          }}
        >
          {totalAmount > 0 ? "+" : ""}
          {totalAmount.toLocaleString()}원
        </Total>
        <PriceContainer>
          <PriceContainer2>
            <StrPrice>입금</StrPrice>
            <NumPrice style={{ color: theme.positive }}>
              {deposit > 0 ? "+" : ""}
              {deposit.toLocaleString()}
            </NumPrice>
          </PriceContainer2>
          <PriceContainer2>
            <StrPrice>출금</StrPrice>
            <NumPrice style={{ color: theme.negative }}>
              {withdraw.toLocaleString()}
            </NumPrice>
          </PriceContainer2>
        </PriceContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
