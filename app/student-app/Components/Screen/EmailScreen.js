import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

/* <input type="text" placeholder="ID" />
<input type="text" placeholder="비밀번호" /> */

class EmailScreen extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: "회원가입",
    headerRight: (
      <Button onPress={() => screenProps.openDraw()} title="OPEN" color="red" />
    ),
  });
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <View>
          <Text>서비스를 위해 로그인 해주세요</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CompleteScreen")}
            style={{ backgroundColor: "blue" }}
          >
            <Text style={{ fontSize: "20", color: "white" }}>이메일 인증</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default EmailScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: 120,
    backgroundColor: "white",
  },
});
