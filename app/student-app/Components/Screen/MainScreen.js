import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import DrawerNavigator from "../Navigator/DrawerNavigator";
import { TouchableHighlight } from "react-native-gesture-handler";

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
        <Text>메인화면이 될부분</Text>
        <TouchableHighlight
          onPress={() => this.props.navigate("CertificationScreen")}
        />
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
});
