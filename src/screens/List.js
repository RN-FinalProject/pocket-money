import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { theme } from "../theme";
import { Button } from "../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IconButton from "../components/IconButton";
import { images } from "../images";
import Item from "../components/Item";

//styled-component View
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;

// const ItemContainer = styled.View`
//   background-color: ${({ theme }) => theme.white};
//   justify-content: center;
//   border-radius: 17px;
//   width: 345px;
//   height: 91px;
//   padding: 20px;
//   margin: 5px 0px;
// `;

// const TextContainer = styled.View`
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

// const Date = styled.Text`
//   flex: 1;
//   font-size: 14px;
//   color: ${({ theme }) => theme.black};
// `;

// const Contents = styled.Text`
//   flex: 1;
//   font-size: 18px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.black};
// `;

// const Price = styled.Text`
//   flex: 1;
//   font-size: 18px;
//   color: ${({ theme }) => theme.black};
// `;

// const Items = ({ date, content, price }) => {
//   return (
//     <ItemContainer>
//       <Date>{date}</Date>
//       <TextContainer>
//         <Contents>{content}</Contents>
//         <Price>{price}</Price>
//       </TextContainer>
//     </ItemContainer>
//   );
// };

// Items.propTypes = {
//   date: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
// };

const Inventory = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 60}px;
  justify-contents: center;
  margin-top: 60px;
`;

const List = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("data");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        // Convert the object values into an array for mapping
        const dataArray = Object.values(parsedData);

        // date를 기준으로 내림차순 정렬
        dataArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        setData(dataArray);
        // setData(parsedData);
        console.log(dataArray);
      }
    } catch (error) {
      console.error("Error fetching data from AsyncStorage:", error);
    }
  };

  // useEffect를 사용하여 데이터를 자동으로 불러오도록 설정
  useEffect(() => {
    // 화면이 포커스될 때마다 loadData 함수 호출
    const unsubscribe = navigation.addListener("focus", () => {
      loadData();
    });

    // 화면이 언마운트 될 때 구독 해제
    return unsubscribe;
  }, [navigation]);

  {
    /*useEffect(() => {
    loadData();
  }, []);*/
  }

  const handleButtonClick = () => {
    // Navigate to the Write screen
    navigation.navigate("거래내역 입력");
  };

  const width = Dimensions.get("window").width;

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
        <Inventory width={width} showsVerticalScrollIndicator={false}>
          {data.map((item, index) => (
            <Item
              key={item.date}
              date={item.date}
              content={item.content}
              price={item.amount.toString()}
            />
          ))}
        </Inventory>
      </Container>
    </ThemeProvider>
  );
};

export default List;
