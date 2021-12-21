import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  Button,
  SafeAreaView,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("text clicked");

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

  let text = "Waiting..";
  let err = null;
  if (errorMsg) {
    text = errorMsg;
    err = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  // make sure that state is changed
  let markerContainer = null;
  if (mapRegion) {
    markerContainer = (
      <Marker
        coordinate={mapRegion}
        title="me"
        description="my location"
      ></Marker>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} style={styles.heading}>
        Implementing map
      </Text>
      <MapView initialRegion={mapRegion} style={styles.map}>
        {markerContainer}
      </MapView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    padding: 20,
    fontSize: 25,
    alignSelf: "flex-start",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
});
