import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";
import { capitalizeString } from "../../utils/transforms";
import AppText from "../AppText";
const width = Dimensions.get("screen").width / 2.2;

export default function FeaturedCourse({ course }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primary,
        padding: 10,
        width,
        marginVertical: 10,
        borderRadius: 25,
        marginRight: 15,
      }}
    >
      <Image
        source={{ uri: course.banner }}
        resizeMode="contain"
        style={{
          width: 90,
          height: 120,
          borderRadius: 15,
          alignSelf: "center",
        }}
      />
      <AppText bold white medium>
        {capitalizeString(course.title)}
      </AppText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <AppText white>11 Videos</AppText>
        </View>
        <View>
          <AppText white>11 tasks</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
