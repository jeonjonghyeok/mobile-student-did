import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native";

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
      <View style={styles.container}>
      <View style={styles.header}><Text style={{fontSize:'25'}}>회원가입</Text></View>
      <View style={styles.dksshd}></View>
      <View style={styles.title}><Text style={{fontSize:'30'}}>안양대학교 모바일 학생증</Text></View>
      <View style={styles.rodrod}>
      <Text style={{fontSize:'20'}}>내 개인정보는 내가
      </Text>
      <Text style={{fontSize:'20'}}>
        쉽고, 편하게 인증하자
        </Text>
      </View>
    
      <View style={styles.content}>
        <Image
          style={{height:'100%',width:'85%',resizeMode:'cover'}}
          source={require('../../assets/hihi.png')}/>
      </View>
      <View style={styles.gkdnl} ><Text style={{fontSize:'40'}}> .  .  .</Text></View>
      <View style={styles.footer}>
        <View style={style.container2}>
        <View style={style.dhls}>
            <Text style={{fontSize:20}}>새로만들기</Text>
        </View>
        <View style={style.dhfms}>
          <Text style={{fontSize:20}}>가져오기</Text>
        </View>
        </View>
        <View>
          
        </View>
      </View>

      
        <View style={{ flexDirection: "row", marginTop: 100 }}>
          <Button
            title="로그인"
            onPress={() => navigation.navigate("MainScreen")}
          />
          <Button title="회원가입" />
        </View>
      </View> 
>>>>>>> 673a73ee405873fa5f7048d61218ec21bb021c52
    );
  }
}
export default SigninScreen;

const style = StyleSheet.create({
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',

  },
  header: {
    width:'100%',
    height:'7%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',    
  },
  dksshd :{
    width:"100%",
    height:"9%",
    //backgroundColor: "white",
  },
  title :{
    width:"100%",
    height:"7%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "green",
    },
  rodrod: {
    width:"100%",
    height:"10%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "white",
  },
  content : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },
  gkdnl : {
    width:"100%",
    height:"10%",
    justifyContent: "center",
    alignItems:"center",
   // backgroundColor:"red",
  },
  textInput: {
    height: 40,
    width: 120,
    backgroundColor: "white",
  footer: {
    width:"100%",
    height:"20%",
    justifyContent: "center",
    //alignItems: "center",
    //backgroundColor:"yellow",
  },

});

const style = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',

  },
  dhls: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  dhfms: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',

  },

});
