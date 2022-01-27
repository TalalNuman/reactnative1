import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";
export default function Card({ title, price, image }) {
  return (
    <>
      <View style={styles.card}>
        <Image style={styles.img} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.price}>{price}</AppText>
          
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    width: "100%",
    height: "45%",
    marginBottom: 20,
    overflow:'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  img: {
    width: "100%",
    height: 200,
    overflow:"hidden",
  },
  price:{
      fontWeight:'700',
      color:colors.secondary,
  },
  title:{
      fontWeight:'bold',
      marginBottom:7,
  }

});
