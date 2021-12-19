import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => console.log("text clicked");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        hey this is a multiline text wiith some long text that may not be
        displayed on the mobile device lets check. it is wrapped automatically
        Ok , fine.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
