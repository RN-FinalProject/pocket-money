import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import List from "../screens/List";
import Write from "../screens/Write";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Write" component={Write} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
