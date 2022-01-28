import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import bgImage from "../assets/chair.jpg";
import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.primary}
          size={35}
        />
      </View>
      <Image resizeMode="contain" style={styles.image} source={bgImage} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
