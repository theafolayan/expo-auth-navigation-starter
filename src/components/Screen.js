import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import Icon from "./Icon";
import colors from "../constants/colors";
import AppText from "./AppText";

export default function Screen({ title }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: colors.grey300,
            borderWidth: 1,
            padding: 5,
            height: 40,
            width: 40,
            borderRadius: 8,
          }}
        >
          <Icon name="chevron-left" />
        </TouchableOpacity>
        {title && (
          <AppText bold dark medium>
            {title}
          </AppText>
        )}
        <View />
        <View />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
});
