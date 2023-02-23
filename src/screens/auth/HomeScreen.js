import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { useAuth } from "../../contexts/Auth";
import Constants from "expo-constants";
import AppText from "../../components/AppText";
import WalletBalance from "../../components/home/WalletBalance";
import Greeting from "../../components/home/Greeting";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Greeting />
      <WalletBalance />
      <AppText bold dark>
        Assigned Tasks
      </AppText>

      <Text>HOME SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    // justifyContent: "center",
    paddingHorizontal: 20,
    // alignItems: "center",
    // backgroundColor: colors.white,
  },
});
