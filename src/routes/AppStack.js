import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/auth/HomeScreen";
import { BottomTabs } from "./BottomTabs";
// import { HomeScreen } from "../screens/auth/HomeScreen";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
    </Stack.Navigator>
  );
};
