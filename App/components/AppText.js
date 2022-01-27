import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

export default function AppText({ children, style }) {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 20,
        fontFamily: "monospace",
      },
    }),
  },
});
