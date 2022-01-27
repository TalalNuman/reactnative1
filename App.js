import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, ScrollView } from "react-native";
// import ViewImageScreen from "./App/screens/ViewImageScreen";
// import WelcomeScreen from "./App/screens/WelcomeScreen";

import AppButton from "./App/components/AppButton";
import Card from "./App/components/Card";
export default function App() {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: "#f8f4f4", paddingTop: 100, padding: 20 },
      ]}
    >
      {/* <Text>HEELO</Text> */}
      <Card title='Red Jacket for sale' price='$200' image={require('./App/assets/jacket.jpg')}/>
      <Card title='Couch for sale' price='$450' image={require('./App/assets/couch.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
