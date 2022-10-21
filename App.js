import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { bgColorStyles, textColorStyles } from "./app/assets/styles/colors";

export default function App() {
  return (
    <View
      style={{ ...styles.container, ...styles.test, ...bgColorStyles.bgYellow }}
    >
      <Text style={{ ...textColorStyles.textRed }}>
        Open up App.js to start working on your app!!!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  test: {
    alignItems: "center",
    justifyContent: "center",
  },
});
