import React from "react";
import { View, ActivityIndicator } from "react-native";
import colors from "../constants/colors";

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
      }}
    >
      <ActivityIndicator
        color={colors.chatYellow}
        animating={true}
        size="large"
      />
    </View>
  );
};
