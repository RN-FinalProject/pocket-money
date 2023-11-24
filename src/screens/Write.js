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

  const handleButtonClick = (buttonType) => {
    setSelectButton(buttonType);
  };

  useFocusEffect(
    useCallback(() => {
      setSelectButton("");
    }, [])
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>날짜</Text>
        <DateInput />
        <Text>입출금</Text>
        <ButtonContainer>
          <Button
            onPress={() => handleButtonClick("입금")}
            backgroundColor={
              selectButton === "입금" || selectButton === ""
                ? theme.positive
                : theme.positiveLight
            }
          >
            입금
          </Button>
          <Button
            onPress={() => handleButtonClick("출금")}
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
        <BigInput placeholder="용돈" />
        <Text>금액</Text>
        <BigInput placeholder="10000" />
        <ButtonContainer2>
          <Button width="345px" height="65px">
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
