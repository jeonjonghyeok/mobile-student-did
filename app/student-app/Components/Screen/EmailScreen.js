import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

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
          <Text>ID</Text>
          <TextInput
            style={{ height: 40, width: 120, marginLeft: 50 }}
            placeholder="ID"
            backgroundColor="white"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>PW</Text>
          <TextInput
            style={{ height: 40, width: 120, marginLeft: 50 }}
            backgroundColor="white"
            placeholder="PW"
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 100 }}>
          <Button
            title="로그인"
            onPress={() => navigation.navigate("MainScreen")}
          />
          <Button title="회원가입" />
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
