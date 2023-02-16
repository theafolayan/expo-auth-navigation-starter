import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import AppText from "../../components/AppText";
import { Form, FormButton, FormField } from "../../components/forms";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { RegisterationSchema } from "../../utils/validations";
import { Loading } from "../../components/Loading";
import user from "../../services/user";
import { useAuth } from "../../contexts/Auth";

export default function RegisterScreen() {
  const auth = useAuth();
  const [loading, isLoading] = useState(false);
  // isLoading(false);

  const signUp = async (values) => {
    try {
      isLoading(true);
      values["guardian_id"] = "XeXn9FV5d";
      values["firstname"] = "Test";
      values["gender"] = "male";
      values["middlename"] = "Middle";
      values["lastname"] = "User";
      values["phone_number"] = "08106924812";
      values["dob"] = "24/25/2004";
      const registerCall = await user.signUp(values);
      console.log(registerCall.data);
      if (registerCall.problem) {
        const loginError = registerCall.data["errors"];
        await setError(loginError[Object.keys(loginError)[0]][0]);
      }
      if (registerCall.ok) {
        auth.signIn(registerCall.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      isLoading(false);
    }
  };

  return (
    <ImageBackground
      style={styles.bg}
      source={require("../../../assets/bg/guest-bg.png")}
    >
      {/* {isLoading && <Loading />} */}
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
        {/* <TouchableOpacity onPress={() => signUp({})}> */}
        <Image
          source={require("../../../assets/brand/bambi-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        {/* </TouchableOpacity> */}
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
