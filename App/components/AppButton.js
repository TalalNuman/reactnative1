import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function AppButton({ title, onPress, color, style }) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 25,
    padding: 15,
    marginVertical: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});
