import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  View,
  StyleSheet,
} from "react-native";

// import { styles } from "./styles";
import { useAuth } from "../../contexts/Auth";

export default function LoginScreen() {
  const [loading, isLoading] = useState(false);
  const auth = useAuth();
  const signIn = async () => {
    isLoading(true);
    await auth.signIn();
  };

  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      {loading ? (
        <ActivityIndicator color={"#000"} animating={true} size="small" />
      ) : (
        <Button title="Sign In" onPress={signIn} />
      )}
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
