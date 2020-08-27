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
          <Text style={{fontSize:25}}>DID기반 모바일 학생증</Text>
          <Text style={{fontSize:25}}>생성 완료</Text>
          
        </View>
        <View style={styles.content}>
          <Text style={{fontSize:25}}>DID:did:~~~</Text>
          <Text style={{fontSize:25}}>생성 날짜 2020.00.00</Text>
        </View>
        <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainScreen")}
          style={{ borderRadius:10, width:"90%",height:"70%", justifyContent:"center", alignItems:"center", backgroundColor: "steelblue" }}
              >
                <Text style={{ justifyContent:"center" ,fontSize: "20", color: "white" }}>확인</Text>
              </TouchableOpacity>
            </View>
        <View style={styles.gkdnl}>
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
    height:"15%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },
  
  
  footer: {
    width: "100%",
    height: "7%",
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

class CompleteScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Text>DID기반 모바일 학생증</Text>
        <Text>생성 완료</Text>
        <Text>DID: did:~~~</Text>
        <Text>생성 날짜 2020.00.00</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainScreen")}
          style={{ backgroundColor: "blue" }}
        >
          <Text style={{ fontSize: "20", color: "white" }}>메인화면으로</Text>
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
});
*/