import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import logo from "../../assets/ayu_icon.png";

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ marginLeft: 20 }} />
        <Text style={styles.text}>블록체인 학생증 시스템</Text>
      </View>
    );
  }
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 30,
  },
});
