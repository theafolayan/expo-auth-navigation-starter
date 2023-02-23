import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Icon from "../Icon";
import colors from "../../constants/colors";

export default function SearchBox() {
  return (
    <View style={styles.container}>
      <Icon name="search" color={colors.grey300} size={20} />
      <TextInput placeholder="Search Course" style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    width: "75%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey200,
    backgroundColor: "#F1F6FB",
    marginVertical: 10,
  },
  box: {
    height: 35,
    marginLeft: 10,
    fontSize: 12,
  },
});
