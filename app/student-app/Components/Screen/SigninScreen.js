import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class SigninScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>MainScreen</Text>
      </View>
    );
  }
}
export default SigninScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
