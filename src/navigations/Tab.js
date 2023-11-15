import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import List from "../screens/List";
import Write from "../screens/Write";
import { theme } from "../theme";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        //상단 네비게이션 바 색상 설정
        headerStyle: {
          backgroundColor: theme.background,
        },
        //상단 네비게이션 바 텍스트 색상 설정
        headerTintColor: theme.black,
        //하단 네비게이션 바 색상 설정
        tabBarStyle: {
          backgroundColor: theme.background,
        },
        //하단 네비게이션 바 텍스트 색상 설정
        tabBarLabelStyle: {
          color: theme.black,
        },
      })}
    >
      <Tab.Screen name="용돈기입장" component={Home} />
      <Tab.Screen name="전체내역" component={List} />
      <Tab.Screen name="거래내역 입력" component={Write} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
