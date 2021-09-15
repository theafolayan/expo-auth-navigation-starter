import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/contexts/Auth";
import { Router } from "./src/routes/Router";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your new app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
