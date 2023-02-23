import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import HomeScreen from "../screens/auth/HomeScreen";
import CourseHome from "../screens/auth/lms/CourseHome";
import ProfileHome from "../screens/auth/profile/ProfileHome";

const BottomTab = createBottomTabNavigator();

export function BottomTabs() {
  //   const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colors.white,
          borderRadius: 20,
          paddingTop: 5,
          paddingBottom: 5,
          height: 70,

          //   justifyContent: "center",
          //   alignItems: "center",
          //   height: 90,
        },
      }}
    >
      {/* <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      /> */}
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Learn"
        component={CourseHome}
        options={{
          title: "Learn",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="clipboard-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Piggybank"
        component={HomeScreen}
        options={{
          title: "Piggybank",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="wallet-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileHome}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <Ionicons size={25} style={{ marginBottom: 2 }} {...props} />;
}

const styles = StyleSheet.create({
  shadow: {},
});
