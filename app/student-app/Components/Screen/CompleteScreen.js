import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// import UpperNavigator from "../Navigator/UpperNavigator";

class CompleteScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Text>MainScreen</Text>
      </View>
    );
  }
}
export default CompleteScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
