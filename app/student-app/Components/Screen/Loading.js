import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import logo from "../../assets/ayu_icon.png";

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.case1}>
          <Text style={styles.title}>블록체인기반 학생증 서비스</Text>
        </View>
        <View style={styles.case2}>
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            source={require("../../assets/logo1.jpg")}
          />
        </View>
        <View style={styles.case3}>
          <Text style={styles.small2}>개발진들</Text>
          <Text style={styles.small}>
            전종혁,박현준,김경동,이재성,송소연,우길제
          </Text>
        </View>
      </View>
      // <View style={styles.container}>
      //   <Image source={logo} style={{ marginLeft: 20 }} />
      //   <Text style={styles.text}>블록체인 학생증 시스템</Text>
      // </View>
    );
  }
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  case1: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
  },
  case2: {
    flex: 3,
    // backgroundColor: "green",
  },
  case3: {
    flex: 1,
    // backgroundColor: "blue",
  },
  title: { paddingTop: 70, fontSize: 30, alignContent: "center" },
  small2: { justifyContent: "flex-end", paddingTop: 50, paddingLeft: 310 },
  small: { justifyContent: "flex-end", paddingLeft: 100 },
});
