import { View, Text } from "react-native";
import React from "react";

import defaultStyles from "../config/styles";

export default function AppText({ children, style }) {
  return (
    <View>
      <Text style={[defaultStyles.text, style]}>{children}</Text>
    </View>
  );
}
