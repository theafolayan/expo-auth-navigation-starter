import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../constants/colors";

export default function AppText({
  children,
  style,
  big,
  colored,
  bold,
  dark,
  medium,
  title,
  yellow,
  centered,
  small,
  red,
  green,
  extraBig,
  underlined,
  italic,
  grey,
  left,
  right,
  size,
  white,
}) {
  return (
    <View>
      <Text
        style={[
          styles.text,
          big && styles.big,
          colored && styles.colored,
          bold && styles.bold,
          dark && styles.dark,
          medium && styles.medium,
          title && styles.title,
          centered && styles.centered,
          small && styles.small,
          red && styles.red,
          green && styles.green,
          extraBig && styles.extraBig,
          yellow && styles.yellow,
          underlined && styles.underlined,
          white && styles.white,
          grey && styles.grey,
          right && styles.right,
          left && styles.left,
          italic && styles.italic,
          style,
          size && { fontSize: size },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: 'PlusJakarta',
    paddingHorizontal: 5,
    paddingVertical: 2,
    color: "#667085",
    fontSize: 14,
  },

  big: {
    fontSize: 24,
  },
  colored: {
    color: colors.primary,
  },
  red: { color: colors.red },
  bold: {
    fontWeight: "bold",
    color: colors.primary,
  },
  dark: {
    color: colors.dark,
  },
  yellow: {
    color: colors.yellow,
  },
  small: {
    fontSize: 11,
  },
  italic: {
    // fontFamily: 'PlusJakartaItalic',
  },
  medium: {
    fontSize: 16,
  },
  white: {
    color: colors.white,
  },
  grey: { color: colors.light },

  extraBig: { fontSize: 28, margin: 10 },
  title: {
    marginVertical: 5,
  },
  green: {
    color: colors.green,
  },
  centered: {
    textAlign: "center",
  },
  left: { textAlign: "left" },
  right: { textAlign: "right" },
  underlined: {
    textDecorationLine: "underline",
    marginHorizontal: 4,
  },
});
