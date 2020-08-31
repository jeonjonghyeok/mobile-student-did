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
        <View style={style.header}>
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            source={require("../../assets/logo1.jpg")}
          />
        </View>
        <View style={style.content}>
          <Image
            style={{ height: "60%", width: "60%", resizeMode: "contain" }}
            source={require("../../assets/dsdljs.jpg")}
          />
          <Text style={{ fontSize: 20 }}>이름: 이재성</Text>
          <Text style={{ fontSize: 20 }}>학번:201532028</Text>
          <Text style={{ fontSize: 20 }}>학과: 정보통신공학</Text>
        </View>

        <View style={style.footer}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              width: "60%",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "steelblue",
            }}
            onPress={() => navigation.navigate("PasswordScreen")}
          >
            <Text
              style={{ justifyContent: "center", fontSize: 20, color: "white" }}
            >
              검증
            </Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: "30%",
    //backgroundColor:"green",
  },
  content: {
    //flexDirection:'row',
    width: "100%",
    height: "40%",
    //backgroundColor:"red",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:"yellow",
  },

  tinylog: {},
});
/*
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  dhls: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dhfms: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
*/
