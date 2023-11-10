import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "../Home";
import List from "../List";
import Write from "../Write";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color}/>
};

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home"
        screenOptions={({route}) => ({
            tabBarIcon: props => {
                var name = '';
                if (route.name === 'List') name = 'list';
                else if (route.name === 'Write') name = 'write';
                else name = 'home';
                return TabIcon({...props, name});
            },
        })}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: props => TabIcon({ ...props, name: 'home'}),
            }}
            />
            <Tab.Screen name="List" component={List}
            options={{
                tabBarIcon: props => TabIcon({ ...props, name: 'list'}),
            }}
            />
            <Tab.Screen name="Write" component={Write}
            options={{
                tabBarIcon: props => TabIcon({ ...props, name: 'write'}),
            }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation;