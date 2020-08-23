import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

/* <input type="text" placeholder="ID" />
<input type="text" placeholder="비밀번호" /> */

class SigninScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button
          title="로그인"
          onPress={() => navigation.navigate("MainScreen")}
        />
        <Button title="회원가입" />
      </View>
    );
  }
}
export default SigninScreen;

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
