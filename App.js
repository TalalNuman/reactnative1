import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
} from "react-native";

export default function App() {
  var i = 0;
  return (
    <SafeAreaView style={styles.container}>
      <Text>HEELO Jamal</Text>
      <Button
        color={"green"}
        title="CLick Me"
        onPress={() =>
          Alert.alert("MyTitle", "My Message", [
            { text: "yes" , onPress:()=>{console.log('YES')}},
            { text: "No" , onPress:()=>{console.log('NO');}},
          ])
        }
      >
        Press Me Jamal
      </Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
