import React from "react";
import { Image, StyleSheet, Text, View, Alert } from "react-native";
import anu from "./assets/icon.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={anu} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            "항목을 선택해주세요",
            "아래의 항목에서 선택해주세요",
            [
              { text: "OK", onPress: () => console.log("OK pressed!") },
              { text: "Cancel", onPress: () => console.log("Cancel pressed!") },
            ],
            { cancelable: false }
          )
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>선택해주세요</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: { fontSize: 20, color: "#fff" },
});
