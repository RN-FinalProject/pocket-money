import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import List from "../screens/List";
import Write from "../screens/Write";
import { theme } from "../theme";
import { images } from "../images";
import { Image } from "react-native";

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
        //상단 네비게이션 바 아래 줄
        headerShadowVisible: true,
        //하단 네비게이션 바 색상 설정
        tabBarStyle: {
          backgroundColor: theme.positive,
          padding: 16,
        },
        // //하단 네비게이션 바 텍스트 색상 설정
        // tabBarLabelStyle: {
        //   color: theme.black,
        // },
        tabBarLabel: "",
        // tabBarIcon: ({ color, size }) => {
        //   let iconName;
        //   if (route.name === "용돈기입장") {
        //     iconPath = images.home; // 홈 화면에 대한 아이콘 이름 지정
        //   } else if (route.name === "전체 내역") {
        //     iconPath = images.list; // 리스트 화면에 대한 아이콘 이름 지정
        //   } else if (route.name === "거래 내역 입력") {
        //     iconPath = images.write; // 쓰기 화면에 대한 아이콘 이름 지정
        //   }
        //   return <Image source={iconPath} />;
        // },
      })}
    >
      <Tab.Screen
        name="용돈기입장"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.home}
              style={{
                width: 30,
                height: 30,
                //tintColor: focused ? theme.white : theme.black,
                tintColor: focused ? theme.negative : theme.white,
                alignSelf: "center",
              }}
            ></Image>
          ),
        }}
      />
      <Tab.Screen
        name="전체내역"
        component={List}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.list}
              style={{
                width: 30,
                height: 30,
                alignSelf: "center",
                //tintColor: focused ? theme.white : theme.black,
                tintColor: focused ? theme.negative : theme.white,
              }}
            ></Image>
          ),
        }}
      />
      <Tab.Screen
        name="거래내역 입력"
        component={Write}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.write}
              style={{
                width: 30,
                height: 30,
                alignSelf: "center",
                //tintColor: focused ? theme.white : theme.black,
                tintColor: focused ? theme.negative : theme.white,
              }}
            ></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
