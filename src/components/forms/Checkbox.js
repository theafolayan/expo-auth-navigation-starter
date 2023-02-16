import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import colors from "../../constants/colors";

export default function Checkbox({ checked, onPress }) {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      {checked ? <MaterialCommunityIcons name="check" size={18} /> : <View />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    alignItems: "center",
    borderColor: colors.primary,
  },
});
