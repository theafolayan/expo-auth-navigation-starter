import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import colors from "../../constants/colors";
import AppText from "../AppText";
import ErrorMessage from "./ErrorMessage";

export default function AppPasswordInput({
  style,
  placeholder,
  label,
  type,
  half,
  icon,
  error,
  errorVisible,
  ...otherProps
}) {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  return (
    <View style={[styles.container, half && styles.half]}>
      {error && errorVisible ? (
        <ErrorMessage error={error} visible={errorVisible} />
      ) : (
        <AppText>{label}</AppText>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.inputBox, style]}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          {...otherProps}
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Feather
            name={secureTextEntry ? "eye" : "eye-off"}
            size={20}
            color={colors.grey300}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    width: "85%",
    fontSize: 14,
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
});
