import React, { useState } from "react";
import styled from "styled-components/native";

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
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.white};
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  justify-content: center;
  align-items: center;
`;

const DateInput = (props) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const handleYearChange = (text) => {
    setYear(text);
  };
  const handleMonthChange = (text) => {
    setMonth(text);
  };
  const handleDayChange = (text) => {
    setDay(text);
  };

  return (
    <DateInputContainer>
      <StyledSmallInput
        placeholder="2023"
        value={year}
        onChangeText={handleYearChange}
      />
      <StyledSmallInput
        placeholder="04"
        value={month}
        onChangeText={handleMonthChange}
      />
      <StyledSmallInput
        placeholder="17"
        value={day}
        onChangeText={handleDayChange}
      />
    </DateInputContainer>
  );
};

export default DateInput;
