import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

export default function ListingDetails({ title, price }) {
  return (
    <Screen>
      <Image style={styles.img} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailscontainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/Talal.jpeg")}
          title="Talal Numan"
          subTitle="5 Listings"
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  detailscontainer: {
    padding: 20,
  },
  userContainer:{
      marginVertical:10
  },
  img: {
    width: "100%",
    height: 300,
  },
  price: {
    fontWeight: "700",
    color: colors.secondary,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "100",
  },
});
