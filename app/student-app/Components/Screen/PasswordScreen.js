import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import UpperNavigator from "../Navigator/UpperNavigator";

class PasswordScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Text>비밀번호 인증화면</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("CertficationScreen")}
          style={{ backgroundColor: "blue" }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>인증완료</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default PasswordScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
