import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function App() {
  const handlePress = () => console.log("text clicked");
  // console.log(Constants.statusBarHeight);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // console.log("location", location);

      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0422,
      });
    })();
  }, []);

  // console.log("mapregion", mapRegion);

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
      <MapView initialRegion={mapRegion} style={styles.map}>
        <Marker
          coordinate={mapRegion}
          title="me"
          description="my location"
        ></Marker>
      </MapView>
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
