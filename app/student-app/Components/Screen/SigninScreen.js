import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { createPortal } from "react-dom";

/* <input type="text" placeholder="ID" />
<input type="text" placeholder="비밀번호" /> */

class SigninScreen extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: "회원가입",
    headerRight: (
      <Button onPress={() => screenProps.openDraw()} title="OPEN" color="red" />
    ),
  });
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: "25" }}>회원가입</Text>
        </View>
        <View style={styles.dksshd}></View>
        <View style={styles.title}>
          <Text style={{ fontSize: "30" }}>안양대학교 모바일 학생증</Text>
        </View>
        <View style={styles.rodrod}>
          <Text style={{ fontSize: "20" }}>내 개인정보는 내가</Text>
          <Text style={{ fontSize: "20" }}>쉽고, 편하게 인증하자</Text>
        </View>

        <View style={styles.content}>
          <Image
            style={{ height: "100%", width: "85%", resizeMode: "cover" }}
            source={require("../../assets/hihi.png")}
          />
        </View>
        <View style={styles.gkdnl}>
          <Text style={{ fontSize: "40" }}> . . .</Text>
        </View>

        <View style={styles.footer}>
          <View style={style.container2}>
            <View style={style.dhls}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateScreen")}
                style={{ backgroundColor: "blue" }}
              >
                <Text style={{ fontSize: "20", color: "white" }}>
                  새로만들기
                </Text>
              </TouchableOpacity>
            </View>
            <View style={style.dhfms}>
              <TouchableOpacity
                style={{ backgroundColor: "blue" }}
                onPress={() => navigation.navigate("CreateScreen")}
              >
                <Text style={{ fontSize: "20", color: "white" }}>가져오기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View></View>
        </View>
      </View>
    );
  }
}
export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "steelblue",
  },
  dksshd: {
    width: "100%",
    height: "9%",
    //backgroundColor: "white",
  },
  title: {
    width: "100%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "green",
  },
  rodrod: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "white",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },
  gkdnl: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"red",
  },
  footer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    //alignItems: "center",
    //backgroundColor:"yellow",
  },
});

const style = StyleSheet.create({
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
