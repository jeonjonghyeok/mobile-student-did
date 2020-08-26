import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import UpperNavigator from "../Navigator/UpperNavigator";

class CompleteScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Text>DID기반 모바일 학생증</Text>
        <Text>생성 완료</Text>
        <Text>DID: did:~~~</Text>
        <Text>생성 날짜 2020.00.00</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainScreen")}
          style={{ backgroundColor: "blue" }}
        >
          <Text style={{ fontSize: "20", color: "white" }}>메인화면으로</Text>
        </TouchableOpacity>
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
