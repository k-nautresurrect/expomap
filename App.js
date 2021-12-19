import React from "react";
import MapView from "react-native-maps";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function App() {
  const handlePress = () => console.log("text clicked");
  // console.log(Constants.statusBarHeight);

  return (
    <View style={styles.container}>
      <Text
        numberOfLines={1}
        onPress={handlePress}
        style={{
          marginTop: Constants.statusBarHeight + 30,
        }}
      >
        Implementing map
      </Text>
      <MapView style={styles.map} />
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
