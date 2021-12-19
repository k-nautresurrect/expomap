import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback, // only for android, works with view
  View,
  Image,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("text clicked");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        hey this is a multiline text wiith some long text that may not be
        displayed on the mobile device lets check. it is wrapped automatically
        Ok , fine.
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("touched image")}>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
      {/*
       * static image
       * can increase the size of bundle and ship it with the bundle.
       * the image from internet will not visible untill we specify
       * its dimensions and it is passed as an object.
       */}
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
