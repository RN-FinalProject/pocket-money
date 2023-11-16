import React from 'react';
import styled from 'styled-components/native';

const DateInputContainer = styled.View`
  flex-direction: row; 
  justify-content: center;
  align-items: center; 
  margin-vertical: 10px;
`;

const StyledSmallInput = styled.TextInput`
width: 112px;
height: 46px;
border-radius: 17px;
margin: 3px 5px;
padding: 15px 20px;
background-color: ${({ theme}) => theme.white};
font-size: 20PX;
color: ${({ theme }) => theme.text};
justify-content: center;
align-items: center;
`;

const DateInput = () => {
  return (
    <DateInputContainer>
      <StyledSmallInput/>
      <StyledSmallInput/>
      <StyledSmallInput/>
    </DateInputContainer>
  );
};

export default DateInput;
