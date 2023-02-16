import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import AppText from "../../components/AppText";
import { Form, FormButton, FormField } from "../../components/forms";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { RegisterationSchema } from "../../utils/validations";

export default function RegisterScreen() {
  return (
    <ImageBackground
      style={styles.bg}
      source={require("../../../assets/bg/guest-bg.png")}
    >
      <ExpoStatusBar style="auto" translucent />
      <AppText> </AppText>

      <Form
        initialValues={{
          email: "",
          password: "",
          confirm_password: "",
          username: "",
        }}
        validationSchema={RegisterationSchema}
        onSubmit={(values) => {
          signUp(values);
        }}
      >
        <Image
          source={require("../../../assets/brand/bambi-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <FormField placeholder="Username" name="username" icon="person" />
        <FormField
          placeholder="ciroma.adekunle@mail.com"
          label="Email Address"
          icon="mail"
          name="email"
        />

        <FormField
          placeholder="Password"
          name="password"
          label="Password"
          icon="lock"
          password
        />
        <FormField
          placeholder="Confirm Password"
          name="confirm_password"
          label="Password"
          icon="lock"
          password
        />

        <View
          style={{
            marginTop: 50,
          }}
        >
          <FormButton title="Sign up" />
        </View>
      </Form>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
  },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 30,
    width: 190,
    height: 40,
  },
});
