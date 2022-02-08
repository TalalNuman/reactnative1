import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Logo from "../assets/logo-red.png";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";

export default function LoginScreen() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
  });

  return (
    <Screen style={{ padding: 20 }}>
      <Image style={styles.logo} source={Logo} />
      <AppText style={styles.heading}>Sign IN</AppText>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.inputContainer}>
              <AppTextInput
                icon="email"
                autoCaptitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                textContentType="emailAddress"
                placeholder="Email"
                keyboardType="email-address"
              />
              <ErrorMessage message={errors.email} visible={touched.email} />
              <AppTextInput
                icon="lock"
                autoCaptitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                textContentType="password"
                placeholder="Password"
                secureTextEntry
              />
              <ErrorMessage
                message={errors.password}
                visible={touched.password}
              />
            </View>
            <View>
              <AppButton title="LogIn" color="primary" onPress={handleSubmit} />
              <AppText style={styles.text}>
                First time? Register yourself now!
              </AppText>
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    //   backgroundColor:'red',
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
