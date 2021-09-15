import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { useAuth } from "../../contexts/Auth";

export default function HomeScreen() {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };
  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d1d1d1",
  },
});
