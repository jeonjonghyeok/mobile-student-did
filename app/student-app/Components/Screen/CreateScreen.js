import React, { Component } from "react";
import {TouchableOpacity, View, Text, StyleSheet, Button, TextInput, Image } from "react-native";

// <input type="text" placeholder="ID" />
// <input type="text" placeholder="비밀번호" /> 

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
          <Text style={{fontSize:25}}>DID를 발급 및 개인키를</Text>
          <Text style={{fontSize:25}}>발급받기 위해 이메일 인증을</Text>
          <Text style={{fontSize:25}}>진행 부탁드립니다.</Text>
        </View>
        <View style={styles.content}>
        <TouchableOpacity
        onPress={() => navigation.navigate("EmailScreen")}
        style={{ borderRadius:10, width:"60%",height:"70%", justifyContent:"center", alignItems:"center", backgroundColor: "steelblue" }}
              >
                <Text style={{ justifyContent:"center" ,fontSize: 20, color: "white" }}>이메일인증</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.footer}></View>
        <View style={styles.gkdnl}>
        <TouchableOpacity
        onPress={() => navigation.navigate("EmailScreen")}
        style={{ borderRadius:10, width:"90%",height:"65%", justifyContent:"center", alignItems:"center", backgroundColor: "steelblue" }}
              >
                <Text style={{ justifyContent:"center" ,fontSize: 20, color: "white" }}>다음</Text>
              </TouchableOpacity>
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
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "steelblue",
  },
  
  content: {
    width:"100%",
    height:"7%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },
  
  
  footer: {
    flex:4,
    //width: "100%",
    //height: "20%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:"green",
  },
  gkdnl: {
    flex:1,
    //backgroundColor:"steelblue",
    justifyContent: "center",
    alignItems: "center",
    
    
  },


});
/*
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import UpperNavigator from "../Navigator/UpperNavigator";

class CreateScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Text>DID기반 모바일 학생증</Text>
        <Text>생성 완료</Text>
        <Text style={{ fontSize: 30 }}>DID: did:~~~</Text>
        <Text>생성 날짜 2020.00.00</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmailScreen")}
          style={{ backgroundColor: "blue" }}
        >
          <Text style={{ fontSize: "20", color: "white" }}>이메일 인증</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default CreateScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
*/