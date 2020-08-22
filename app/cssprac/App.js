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