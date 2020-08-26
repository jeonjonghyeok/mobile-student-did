import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import logo from "../../assets/ayu_icon.png";

class MainScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Image style={style.tinyLogo} source={logo} />
        <Text>안녕하세요 ~님</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("PasswordScreen")}
          style={{ backgroundColor: "blue" }}
        >
          <Text style={{ fontSize: "20", color: "white" }}>검증</Text>
        </TouchableOpacity>
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
