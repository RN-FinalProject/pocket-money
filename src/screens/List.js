import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import PropTypes from 'prop-types';
import { Text } from "react-native";
import { theme } from "../theme";
import { Button } from "../components/Buttons";
import { Dimensions } from 'react-native';

//styled-component View
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-contents: center;
`;


const ItemContainer = styled.View`
  background-color: ${({ theme }) => theme.white};
  justify-contents: center;
  border-radius: 17px;
  width: 345px;
  height: 91px;
  padding: 25px;
  margin: 5px 0px;
`;

const TextContainer = styled.View`
  flex-direction: row;
  justify-contents: center;
  align-items: center;
`;

const Date = styled.Text`
  flex: 1;
  font-size: 14px;
  color: ${({ theme }) => theme.black};
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.black};
`;

const Price = styled.Text`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.black};
`;

const Items = ({ date, content, price}) => {
  return (
      <ItemContainer>
        <Date>{date}</Date>
        <TextContainer>
          <Contents>{content}</Contents>
          <Price>{price}</Price>
        </TextContainer>
      </ItemContainer>
    
  );
};

Items.propTypes = {
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

const Inventory = styled.ScrollView`
  flex:1;
  width: ${({ width}) => width - 60}px;
  justify-contents: center;
  margin-top: 60px;
`;

const List = () => {
  const width = Dimensions.get('window').width;
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
        >
          거래내역 추가하기
        </Button>
        <Inventory 
          width={width}
          showsVerticalScrollIndicator={false}>
          <Items date="2023-11-17" content="넷플릭스" price="17000"/>
          <Items date="2023-11-17" content="넷플릭스" price="17000"/>
          <Items date="2023-11-17" content="넷플릭스" price="17000"/>
          <Items date="2023-11-17" content="넷플릭스" price="17000"/>
          <Items date="2023-11-17" content="넷플릭스" price="17000"/>
          <Items date="2023-11-17" content="넷플릭스" price="17000"/>
          <Items date="2023-11-17" content="넷플릭스" price="17000"/>
        </Inventory>
      </Container>
    </ThemeProvider>
  );
};

export default List;
