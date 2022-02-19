import { View, Image, StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";

import Logo from "../assets/logo-red.png";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { SubmitButton, AppFormField, AppForm } from "../components/forms";

export default function LoginScreen() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
  });
  return (
    <Screen style={{ padding: 20 }}>
      <Image style={styles.logo} source={Logo} />
      <AppText style={styles.heading}>Sign IN</AppText>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <View style={styles.inputContainer}>
          <AppFormField
            name="email"
            icon="email"
            autoCaptitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            placeholder="Email"
            keyboardType="email-address"
          />
          <AppFormField
            name="password"
            icon="lock"
            autoCaptitalize="none"
            autoCorrect={false}
            textContentType="password"
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <View>
          <SubmitButton title="LogIn" color="primary" />
          <AppText style={styles.text}>
            First time? Register yourself now!
          </AppText>
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 80,
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    color: colors.medium,
  },
});
