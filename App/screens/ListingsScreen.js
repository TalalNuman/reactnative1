import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch for sale",
    price: "300",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 4,
    title: "Red Jacket for sale",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 3,
    title: "Iphone for sale",
    price: "1300",
    image: require("../assets/Talal.jpeg"),
  },
];

export default function ListingsScreen() {
  console.log(listings);
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} price={"$"+ item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
    screen:{
        padding:15,
        backgroundColor:colors.light
    }
});
