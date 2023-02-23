import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";
import { useAuth } from "../../contexts/Auth";
import AppText from "../AppText";

export default function Greeting() {
  const auth = useAuth();

  return (
    <View style={styles.container}>
      <AppText bold big dark>
        Hi {auth?.authData?.user?.firstname}!
      </AppText>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.xp}>
          <AppText bold>🌟:500P</AppText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notif}>
          <Ionicons
            name="notifications-outline"
            size={20}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  xp: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 2,
    borderColor: colors.primary,
    marginRight: 10,
  },
  notif: {
    padding: 4,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.grey,
  },
});
