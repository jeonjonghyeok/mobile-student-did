import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
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
          source={require('./hihi.png')}/>
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
    </View>
  );
}

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
  footer: {
    width:"100%",
    height:"20%",
    justifyContent: "center",
    //alignItems: "center",
    //backgroundColor:"yellow",
  },

});