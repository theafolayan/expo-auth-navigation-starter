import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import colors from "../../constants/colors";
import AppText from "../AppText";
import ErrorMessage from "./ErrorMessage";

export default function AppTextInput({
  autoFocus,
  style,
  placeholder,
  label,
  type,
  half,
  icon,
  error,
  errorVisible,
  customStyle,
  ...otherProps
}) {
  return (
    <View style={[styles.container, half && styles.half]}>
      {error && errorVisible ? (
        <ErrorMessage error={error} visible={errorVisible} />
      ) : null}
      <View style={[styles.inputContainer, customStyle]}>
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color={colors.white}
            style={{ marginRight: 5 }}
          />
        )}
        <TextInput
          autoFocus={autoFocus}
          style={[styles.inputBox, style]}
          placeholder={placeholder}
          placeholderTextColor={colors.white}
          autoCapitalize="none"
          autoCorrect={false}
          {...otherProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    width: "95%",
    fontSize: 14,
    color: colors.white,
  },
  container: {
    marginVertical: 5,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 10,
    width: "100%",
    borderColor: colors.grey200,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  half: {
    width: "48%",
  },
});
