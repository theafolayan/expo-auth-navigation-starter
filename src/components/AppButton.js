import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colors from "../constants/colors";
import AppText from "./AppText";

export default function AppButton({
  onPress,
  title,
  style,
  half,
  icon,
  outlined,
  disabled,
  bold,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.ctaButton,
        half && styles.half,
        style,
        outlined && styles.outlined,
        icon && styles.icon,
        disabled && styles.disabled,
      ]}
    >
      <AppText dark bold medium>
        {title}
      </AppText>
      {icon && <Feather name={icon} color="white" size={20} />}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  ctaButton: {
    backgroundColor: colors.white,
    marginVertical: 10,
    width: "100%",
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
  },
  disabled: {
    backgroundColor: "grey",
  },

  half: {
    width: "40%",
    padding: 5,
  },

  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.dark,
  },
});
