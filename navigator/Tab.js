import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import All from '../screens/All.js';
import HealthScreen from '../screens/Health.js';
import SportsScreen from '../screens/Sports.js';
import TechScreen from '../screens/Tech.js';
import BusinessScreen from "../screens/Business.js";
import DetailScreen from "../screens/Detail.js";
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from '../navigator/StackNavigator'
import BusinessStackScreen from "./BusinessStackNavigator.js";

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="General" component={HomeStackScreen}
                    options={{
                        tabBarIcon: (props) => (
                            <Icon type='feather' name='home' color={props.color} />
                        ),
                    }} />

                <Tab.Screen name="Economía" component={BusinessStackScreen}
                    options={{
                        tabBarIcon: (props) => (
                            <Icon type='feather' name='dollar-sign' color={props.color} />
                        ),
                    }} />

                <Tab.Screen name="Salud" component={HealthScreen}
                    options={{
                        tabBarIcon: (props) => (
                            <Icon type='feather' name='heart' color={props.color} />
                        ),
                    }} />

                <Tab.Screen name="Deporte" component={SportsScreen}
                    options={{
                        tabBarIcon: (props) => (
                            <Icon type='ionicon' name="tennisball-outline" color={props.color} />
                        ),
                    }} />
                <Tab.Screen name="Tecnología" component={TechScreen}
                    options={{
                        tabBarIcon: (props) => (
                            <Icon type='ionicon' name="hardware-chip-outline" color={props.color} />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Tabs;