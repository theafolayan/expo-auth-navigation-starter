import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { useAuth } from "../../contexts/Auth";
import Constants from "expo-constants";
import AppText from "../../components/AppText";
import WalletBalance from "../../components/home/WalletBalance";

export default function HomeScreen() {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };
  return (
    <View style={styles.container}>
      <WalletBalance />
      <AppText bold dark>
        Assigned Tasks
      </AppText>

      <Text>HOME SCREEN</Text>
      <Button title="Sign Out" onPress={signOut} />
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
    // backgroundColor: "#d1d1d1",
  },
});
