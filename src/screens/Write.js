import React, { useCallback, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { Text as BaseText } from "react-native";
import { theme } from "../theme";
import BigInput from "../components/Input";
import DateInput from "../components/DateInput";
import { Button } from "../components/Buttons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//styled-component View
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;
const DateInputContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-vertical: 10px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-vertical: 10px;
`;

const ButtonContainer2 = styled.View`
  justify-content: bottom;
  align-items: center;
  margin-vertical: 10px;
`;

const Text = styled(BaseText)`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: 500;
  margin-left: 35px;
`;

const Write = () => {
  const navigation = useNavigation();
  const handleClose = () => {
    navigation.goBack();
  };

  const [selectButton, setSelectButton] = useState("");
  const [sign, setSign] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");

  const handleIOButtonClick = (buttonType) => {
    setSelectButton(buttonType);
    if (buttonType === "입금") {
      setSign("+");
    } else if (buttonType === "출금") {
      setSign("-");
    } else setSign("");
  };
  const dateFormat = () => {
    const datemonth = month.length === 1 ? `0${month}` : month;
    const dateDay = day.length === 1 ? `0${day}` : day;
    setDate(`${year}-${datemonth}-${dateDay}`);
    return date;
  };
  const handleYearChange = (text) => {
    setYear(text);
  };
  const handleMonthChange = (text) => {
    setMonth(text);
  };
  const handleDayChange = (text) => {
    setDay(text);
  };
  const handleContentChange = (text) => {
    setContent(text);
  };
  const handleAmountChange = (text) => {
    parseInt(setAmount(text), 10);
  };

  const handleInputButton = () => {
    navigation.navigate("전체내역");
  };

  useFocusEffect(
    useCallback(() => {
      setSelectButton("");
      setYear("");
      setMonth("");
      setDay("");
      setContent("");
      setAmount("");
      setSign("");
    }, [])
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>날짜</Text>

        <DateInputContainer>
          <DateInput
            placeholder="2023"
            keyboardType="numeric"
            maxLength={4}
            value={year}
            onChangeText={handleYearChange}
          />
          <DateInput
            placeholder="04"
            keyboardType="numeric"
            maxLength={2}
            value={month}
            onChangeText={handleMonthChange}
          />
          <DateInput
            placeholder="17"
            keyboardType="numeric"
            maxLength={2}
            value={day}
            onChangeText={handleDayChange}
          />
        </DateInputContainer>
        <Text>입출금</Text>
        <ButtonContainer>
          <Button
            onPress={() => handleIOButtonClick("입금")}
            backgroundColor={
              selectButton === "입금" || selectButton === ""
                ? theme.positive
                : theme.positiveLight
            }
          >
            입금
          </Button>
          <Button
            onPress={() => handleIOButtonClick("출금")}
            backgroundColor={
              selectButton === "출금" || selectButton === ""
                ? theme.negative
                : theme.negativeLight
            }
          >
            출금
          </Button>
        </ButtonContainer>
        <Text>내용</Text>
        <BigInput
          placeholder="용돈"
          maxLength={10}
          value={content}
          onChangeText={handleContentChange}
        />
        <Text>금액</Text>
        <BigInput
          placeholder="10000"
          keyboardType="numeric"
          value={amount}
          onChangeText={handleAmountChange}
        />
        <ButtonContainer2>
          <Button width="345px" height="65px" onPress={handleInputButton}>
            입력
          </Button>
          <Button
            width="345px"
            height="65px"
            backgroundColor={theme.negative}
            onPress={handleClose}
          >
            닫기
          </Button>
        </ButtonContainer2>
      </Container>
    </ThemeProvider>
  );
};

export default Write;
