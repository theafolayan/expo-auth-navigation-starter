import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";
import { capitalizeString } from "../../utils/transforms";
import AppText from "../AppText";
const width = Dimensions.get("screen").width / 2.39;

export default function CourseCard({ course }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.grey200,
        padding: 10,
        paddingBottom: 30,
        width,
        marginVertical: 10,
        borderRadius: 25,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: colors.white,
            marginTop: 10,
            width: 45,
            height: 45,
            borderRadius: 25,
            justifyContent: "center",
            alignContent: "center",
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          <Image
            source={{ uri: course.banner }}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              alignSelf: "center",
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: colors.lightYellow,
            padding: 5,
            height: 40,
            borderBottomLeftRadius: 20,
            marginTop: -10,
            marginRight: -10,
            justifyContent: "center",
          }}
        >
          <AppText bold small dark>
            {capitalizeString(course.difficulty_level)}
          </AppText>
        </View>
      </View>
      <AppText dark bold>
        {capitalizeString(course.title)}
      </AppText>
    </TouchableOpacity>
  );
}
