import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) {
    return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.img} source={image} />}
            <View style={styles.titleContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
  },

  img: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  titleContainer: {
    marginLeft: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    fontSize: 14,
    color: colors.medium,
  },
});
