import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import logo from "../../assets/ayu_icon.png";

class MainScreen extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: "메인화면",
    headerLeft: (
      <Button onPress={() => screenProps.openDraw()} title="메뉴" color="red" />
    ),
  });
  render() {
    return (
      <View style={style.container}>
        <Image style={style.tinyLogo} source={logo} />
        <Text>안녕하세요 ~님</Text>
      </View>
    );
  }
}
export default MainScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tinylog: {},
});
