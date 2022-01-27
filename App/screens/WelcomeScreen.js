import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import bgImage from "../assets/background.jpg";
import logo from "../assets/logo-red.png";
import React from "react";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground blurRadius={8} style={styles.background} source={bgImage}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" color='primary' />
        <AppButton title="register" color='secondary' />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding:20,
    width:'100%',

  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline:{
    paddingVertical:20,
    fontSize:20,
    fontWeight:"700",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
