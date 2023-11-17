import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { Text } from "react-native";
import { theme } from "../theme";
import { Button } from "../components/Buttons";
import { useNavigation } from "@react-navigation/native";
//styled-component View
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const List = () => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    // Navigate to the Write screen
    navigation.navigate("거래내역 입력");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button
          textColor={theme.black}
          fontSize="20px"
          width="345px"
          height="91px"
          backgroundColor={theme.white}
          borderColor={theme.positive}
          borderRadius="17px"
          onPress={handleButtonClick}
        >
          거래내역 추가하기
        </Button>
        <Text>전체내역</Text>
      </Container>
    </ThemeProvider>
  );
};

export default List;
