import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

export default class CertficationScreen extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: "인증화면",
    headerLeft: (
      <Button onPress={() => screenProps.openDraw()} title="메뉴" color="red" />
    ),
  });
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Text>MainScreen</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
