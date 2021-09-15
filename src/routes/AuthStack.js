import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { SignInScreen } from "../screens/SignInScreen";
import LoginScreen from "../screens/guest/LoginScreen";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
