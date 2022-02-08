import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <Screen style={{ padding: 20 }}>
      <View>
        <AppText style={styles.heading}>Register Now</AppText>
        <View style={styles.inputContainer}>
          <AppTextInput
            icon="eye"
            autoCaptitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setName(text)}
            textContentType="name"
            placeholder="Name"
            keyboardType="name"
          />
          <AppTextInput
            icon="email"
            autoCaptitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
            textContentType="emailAddress"
            placeholder="Email"
            keyboardType="email-address"
          />
          <AppTextInput
            icon="lock"
            autoCaptitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setPassword(text)}
            textContentType="password"
            placeholder="Password"
            secureTextEntry
          /> 
        </View>
      </View>
      <View style={{marginTop:80 }}>
        <AppButton
          title="LogIn"
          color="primary"
          onPress={() => {
            console.log(` ${name} + ${email} + ${password}`);
          }}
        />
        <AppText style={styles.text}>
          Already Have an Account?Click here to LogIn
        </AppText>
      </View>
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
    fontSize: 11,
    color: colors.medium,
  },
  btnContainer: {},
});
