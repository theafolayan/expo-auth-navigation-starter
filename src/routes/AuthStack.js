import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { SignInScreen } from "../screens/SignInScreen";
import LoginScreen from "../screens/guest/LoginScreen";
import RegisterScreen from "../screens/guest/RegisterScreen";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
