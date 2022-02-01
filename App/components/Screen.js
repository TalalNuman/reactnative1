import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import constants from "expo-constants";
export default function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
    flex:1
  },
});
