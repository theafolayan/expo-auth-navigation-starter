import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../../components/Screen";
import AppText from "../../../components/AppText";
import { useAuth } from "../../../contexts/Auth";

export default function ProfileHome() {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };
  return (
    <Screen title="My Profile">
      <View>
        <AppText>Tosin Apariola</AppText>
      </View>

      <Button title="Sign Out" onPress={signOut} />
    </Screen>
  );
}

const styles = StyleSheet.create({});
