import { View, Text } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({ name, size, color, feather }) {
  return (
    <View>
      <Feather name={name} size={size ?? 25} color={color} />
    </View>
  );
}
