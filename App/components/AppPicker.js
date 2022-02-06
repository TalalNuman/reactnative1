import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItem from "./ListItem";
import colors from "../config/colors";
import AppText from "./AppText";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
export default function AppPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(selectedItem);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={25}
              color={colors.medium}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>

          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.medium}
            style={{ marginLeft: "auto" }}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button
          color={colors.danger}
          style={styles.btn}
          title="Close"
          onPress={() => setModalVisible(false)}
        ></Button>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
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
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
