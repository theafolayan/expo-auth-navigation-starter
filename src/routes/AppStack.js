import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/auth/HomeScreen";
import { BottomTabs } from "./BottomTabs";
import TasksScreen from "../screens/auth/tasks/TasksScreen";
import CreateTask from "../screens/auth/tasks/CreateTask";
// import { HomeScreen } from "../screens/auth/HomeScreen";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HOMESCREEN" component={BottomTabs} />
      <Stack.Screen name="TASKS" component={TasksScreen} />
      <Stack.Screen name="CREATE_TASK" component={CreateTask} />
    </Stack.Navigator>
  );
};
