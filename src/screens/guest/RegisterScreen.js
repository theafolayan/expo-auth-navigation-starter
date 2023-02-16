import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import AppText from "../../components/AppText";
import { Form, FormButton, FormField } from "../../components/forms";

export default function RegisterScreen() {
  return (
    <ImageBackground
      style={styles.bg}
      source={require("../../../assets/bg/guest-bg.png")}
    >
      <AppText> </AppText>

      <Form
        initialValues={{
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          code: "",
        }}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          values["username"] = randomWords({
            exactly: 1,
            wordsPerString: 2,
            separator: "-",
          })[0];
          values["accept_terms"] = true;
          signUp(values);
        }}
      >
        <View style={styles.row}>
          <FormField
            autoFocus
            placeholder="Ciroma"
            label="First Name"
            name="first_name"
            icon="user"
          />
          <FormField
            placeholder="Adekunle"
            label="Last Name"
            name="last_name"
          />
        </View>
        <FormField
          placeholder="ciroma.adekunle@mail.com"
          label="Email Address"
          icon="mail"
          name="email"
        />

        <FormField
          placeholder="Create a password"
          name="password"
          label="Password"
          icon="lock"
          password
        />

        <FormField
          placeholder="eg: 500087"
          label="Referrer code (optional)"
          name="code"
        />

        <FormButton title="Sign up" />
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
});
