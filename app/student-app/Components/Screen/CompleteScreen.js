import React, { Component } from "react";
import Moment from "react-moment";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import UpperNavigator from "../Navigator/UpperNavigator";

class CompleteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text style={{ fontSize: 25 }}>DID기반 모바일 학생증</Text>
          <Text style={{ fontSize: 25 }}>생성 완료</Text>
        </View>
        <View style={style.content}>
          <Text
            style={{
              fontSize: 18,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            생성일자: {this.state.date.toLocaleDateString()}
          </Text>
          <Text
            style={{
              fontSize: 18,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.state.date.toLocaleTimeString()}
          </Text>
          <Text
            style={{
              fontSize: 18,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            DID: "did:certification:123456789abcdefghi"
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainScreen")}
          style={{
            borderRadius: 10,
            width: "70%",
            height: "8%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "steelblue",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>메인화면으로</Text>
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
  header: {
    width: "100%",
    height: "30%",
    //justifyContent:"center",
    alignItems: "center",
    //backgroundColor:"red",
  },
  content: {
    width: "100%",
    height: "40%",
    //justifyContent:"center",
    alignItems: "center",
    //backgroundColor:"yellow",
  },
});
