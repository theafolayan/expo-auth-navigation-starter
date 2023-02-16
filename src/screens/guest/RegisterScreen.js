import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import AppText from "../../components/AppText";

// import { Constants } from "expo-constants";

export default function RegisterScreen() {
  return (
    <ImageBackground
      style={styles.bg}
      source={require("../../../assets/bg/guest-bg.png")}
    >
      <AppText> </AppText>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingTop: Constants.statusBarHeight,
  },
});
