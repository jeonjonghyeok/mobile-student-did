import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
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
