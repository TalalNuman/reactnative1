import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
  },

  img: {
    marginHorizontal: 10,
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    fontSize: 14,
    color: colors.medium,
  },
});
