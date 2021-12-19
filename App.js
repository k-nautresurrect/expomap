import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
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
      <TouchableHighlight onPress={() => console.log("touched image")}>
        <Image
          // there are varius props
          blurRadius={0}
          fadeDuration={2000}
          // resizeMode="stretch"
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
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
