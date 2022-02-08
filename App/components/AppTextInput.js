import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={25}
          color={colors.medium}
        />
      )}
      <TextInput style={[defaultStyles.text, styles.input]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.light,
    marginVertical: 10,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  input: {
    width: "100%",
  },
});
