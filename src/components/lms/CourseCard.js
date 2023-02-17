import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import colors from "../../constants/colors";
import { capitalizeString } from "../../utils/transforms";
import AppText from "../AppText";
const width = Dimensions.get("screen").width / 2.39;

export default function CourseCard({ course }) {
  console.log(course);
  return (
    <View
      style={{
        backgroundColor: colors.grey200,
        padding: 10,
        width,
        marginVertical: 10,
        borderRadius: 20,
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
            width: 40,
            height: 40,
            borderRadius: 25,
            justifyContent: "center",
            alignContent: "center",
            marginBottom: 10,
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
          }}
        >
          <AppText bold small dark>
            {capitalizeString(course.difficulty_level)}
          </AppText>
        </View>
      </View>
      <AppText dark bold>
        {course.title}
      </AppText>
    </View>
  );
}
