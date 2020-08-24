/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text>header라능~</Text></View>
      <View style={styles.title}><Text>title이라능~</Text></View>
      <View style={styles.content}><Text>content라구~</Text></View>
      <View style={styles.footer}><Text>footer쿸쿸</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  header: {
    width:'100%',
    height:'9',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9a9a',
  },
  title :{
    width:"100%",
    height:"18%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'green',
  },
  content : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#d6ca1a',
  },
  footer: {
    width:"100%",
    height:"20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#1ad657',
  },
});
*/

/*
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item1} />
        <View style={styles.item2} /><Text>안녕하세요~</Text>
        <View style={styles.item3} /><Text>감사해요~</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  iteml: {
    flex: 1,
    backgroundColor: 'red',
  },
  item2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  item3: {
    flex: 1,
    backgroundColor: 'green',
  },

})


/*

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems:'flex-start',
  },
  item1: {
    width:50,
    height:50,
    backgroundColor: 'red',
  },
});
*/
/*
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item1} />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'stretch',
  },
  item1: {
    //swidth:50,
    height:50,
    backgroundColor: 'red',
  },
});
*/
/*
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
*/
/*
import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native";

// <input type="text" placeholder="ID" />
//<input type="text" placeholder="비밀번호" />

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
            source={require("./hihi.png")}
          />
        </View>
        <View style={styles.gkdnl}>
          <Text style={{ fontSize: "40" }}> . . .</Text>
        </View>

        <View style={styles.footer}>
          <View style={style.container2}>
            <View style={style.dhls}>
            <Text style={{ fontSize: 20 }}>새로만들기</Text>
            </View>
            <View style={style.dhfms}>
              <Text style={{ fontSize: 20 }}>가져오기</Text>
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
    height: "8%",
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
*/
/*
import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native";

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
          <Text style={{fontSize:25}}>이메일 인증</Text>
        </View>
        <View style={styles.footer}></View>
        <View style={styles.gkdnl}>
        <Text style={{fontSize:25}}>다음</Text>
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
    backgroundColor:"steelblue",
    justifyContent: "center",
    alignItems: "center",
    
    
  },


});
*/

import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native";

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
          <Text style={{fontSize:25}}>DID:did:~~~</Text>
          <Text style={{fontSize:25}}>생성 날짜 2020.00.00</Text>
        </View>
        <View style={styles.footer}>
          <Text style={{fontSize:25}}>확인
            </Text>
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
    height: "30%",
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