import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import anu from "./assets/icon.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={anu} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 152,
    height: 79,
    marginBottom: 10,
  },
  instructions: { color: "#888", fontSize: 18, marginHorizontal: 15 },
});
