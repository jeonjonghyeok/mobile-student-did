import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity } from "react-native";

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
        <View style={styles.header}></View>
        <View style={styles.heyhey}></View>
        <View style={styles.content}>
          <Text style={{fontSize:20}}>
            이메일 주소를
          </Text>
          <Text style={{fontSize:20}}>
            입력해 주세요.
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={{ justifyContent:'space-between', alignItems:'center',paddingBottom:10}}>
          <View style={{flexDirection:"row"}}>
          <TextInput style={{borderColor:'#aaa', width:'60%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}
          placeholder='이메일 주소'>
            
          </TextInput>
          <TouchableOpacity
                style={{ borderRadius:5, width:"25%",height:"50%", justifyContent:"center", alignItems:"center", backgroundColor: "gray" }}
                //onPress={() => navigation.navigate("CreateScreen")}
              >
                <Text style={{ justifyContent:"center" ,fontSize:20, color: "white" }}>검증</Text>
              </TouchableOpacity>
              </View>
              <View style={{flexDirection:"row"}}>
          <TextInput style={{borderColor:'#aaa', width:'60%', height:35, borderWidth: 1, borderRadius: 5, padding:5 }}
          placeholder='인증번호'></TextInput>
          <TouchableOpacity
                style={{ borderRadius:5, width:"25%",height:"50%", justifyContent:"center", alignItems:"center", backgroundColor: "gray" }}
                //onPress={() => navigation.navigate("CreateScreen")}
              >
                <Text style={{ justifyContent:"center" ,fontSize:20, color: "white" }}>인증확인</Text>
              </TouchableOpacity>
              </View>
              <View style={{flexDirection:"row"}}>
          <TextInput style={{borderColor:'#aaa', width:'60%', height:35, borderWidth: 1, borderRadius: 5, padding:5 }}
          placeholder='이메일 재전송'></TextInput>
          <TouchableOpacity
                style={{ borderRadius:5, width:"25%",height:"50%", justifyContent:"center", alignItems:"center", backgroundColor: "gray" }}
                //onPress={() => navigation.navigate("CreateScreen")}
              >
                <Text style={{ justifyContent:"center" ,fontSize:20, color: "white" }}>인증확인</Text>
              </TouchableOpacity>
              </View>
          </View>
        <View style={styles.gkgk}>
        <TouchableOpacity
                style={{ borderRadius:10, width:"90%",height:"60%", justifyContent:"center", alignItems:"center", backgroundColor: "steelblue" }}
                onPress={() => navigation.navigate("MainScreen")}
              >
                <Text style={{ justifyContent:"center" ,fontSize: 20, color: "white" }}>다음</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.gkdnl}>

          </View>
          
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
    //height: "9%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "steelblue",
  },
  heyhey: {
    width: "100%",
    //height: "9%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "red",
  },
  
  content: {
    width:"100%",
    height:"10%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },
  
  
  footer: {
    //flex:1,
    width:"100%",
    height:"60%",
    padding:10,
    paddingRight:10,
    paddingVertical:50,
    paddingBottom:30,

  },
  gkgk: {
    width:"100%",
    height:"25%",
    justifyContent:"center",
    alignItems:"center",
    //backgroundColor:"green",

  },
  gkdnl: {
    //flex:1,
    justifyContent: "center",
    alignItems: "center",
    
    //backgroundColor:"steelblue",
  },


  });

/*
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
        <View style={styles.header}></View>
        <View style={styles.heyhey}></View>
        <View style={styles.content}>
          <Text style={{ fontSize: 20 }}>이메일 주소를</Text>
          <Text style={{ fontSize: 20 }}>입력해 주세요.</Text>
        </View>
        <View style={styles.footer}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <TextInput
              style={{
                borderColor: "#aaa",
                width: "60%",
                height: 35,
                borderWidth: 1,
                borderRadius: 5,
                padding: 5,
              }}
            ></TextInput>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                width: "20%",
                height: "13%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "gray",
              }}
              //onPress={() => navigation.navigate("CreateScreen")}
            >
              <Text
                style={{
                  justifyContent: "center",
                  fontSize: 20,
                  color: "white",
                }}
              >
                검증
              </Text>
            </TouchableOpacity>
            <TextInput
              style={{
                borderColor: "#aaa",
                width: "60%",
                height: 35,
                borderWidth: 1,
                borderRadius: 5,
                padding: 5,
              }}
            ></TextInput>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                width: "20%",
                height: "13%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "gray",
              }}
              //onPress={() => navigation.navigate("CreateScreen")}
            >
              <Text
                style={{
                  justifyContent: "center",
                  fontSize: 20,
                  color: "white",
                }}
              >
                인증확인
              </Text>
            </TouchableOpacity>
            <TextInput
              style={{
                borderColor: "#aaa",
                width: "60%",
                height: 35,
                borderWidth: 1,
                borderRadius: 5,
                padding: 5,
              }}
            ></TextInput>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                width: "20%",
                height: "13%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "gray",
              }}
              //onPress={() => navigation.navigate("CreateScreen")}
            >
              <Text
                style={{
                  justifyContent: "center",
                  fontSize: 20,
                  color: "white",
                }}
              >
                인증확인
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gkgk}>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                width: "80%",
                height: "25%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "steelblue",
              }}
              onPress={() => navigation.navigate("MainScreen")}
            >
              <Text
                style={{
                  justifyContent: "center",
                  fontSize: 20,
                  color: "white",
                }}
              >
                다음
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gkdnl}></View>
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
    height: "9%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "steelblue",
  },
  heyhey: {
    width: "100%",
    height: "9%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "red",
  },

  content: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },

  footer: {
    flex: 1,
    padding: 10,
    paddingRight: 10,
    paddingBottom: 30,
  },
  gkgk: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:"green",
  },
  gkdnl: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:"steelblue",
  },
});
*/
/*
import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

 <input type="text" placeholder="ID" />
<input type="text" placeholder="비밀번호" />

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
          <Te
            style={{ height: 40, width: 120, marginLeft: 50 }}
            placeholdextInputr="ID"
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
*/
