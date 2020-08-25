import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default class CertficationScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Text>QR코드를 인식시켜주세요</Text>
        <QRCode logoSize={30} value="http://www.naver.com" />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
