import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BusinessScreen from "../screens/Business.js";
import DetailScreen from "../screens/Detail.js";

const BusinessStackScreen = () => {
  const BusinessStack = createNativeStackNavigator();
  return (
    <BusinessStack.Navigator initialRouteName="Economía">
      <BusinessStack.Screen name="Business" component={BusinessScreen} />
      <BusinessStack.Screen name="Detail" component={DetailScreen} />
    </BusinessStack.Navigator>
  );
};

export default BusinessStackScreen;