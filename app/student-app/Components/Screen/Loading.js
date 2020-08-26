import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>블록체인 학생증 시스템</Text>
      </View>
    );
  }
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "white",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
