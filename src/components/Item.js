import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import IconButton from "./IconButton";
import { images } from "../images";

const Container = styled.View`
  background-color: ${({ theme }) => theme.white};
  justify-content: center;
  border-radius: 17px;
  width: 345px;
  height: 91px;
  padding: 20px;
  margin: 5px 0px;
`;

const TextContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
const Date = styled.Text`
  flex: 1;
  font-size: 14px;
  color: ${({ theme }) => theme.black};
`;
const IconContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
`;
const Item = ({ date, content, price }) => {
  return (
    <Container>
      <Date>{date}</Date>
      <TextContainer>
        <Contents>{content}</Contents>
        <Price>{price}</Price>
        <IconContainer>
          <IconButton type={images.delete}></IconButton>
        </IconContainer>
      </TextContainer>
    </Container>
  );
};
export default Item;
