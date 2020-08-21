import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.case1} />
      <View style={styles.case2} />
      <View style={styles.case3} />
      <View style={styles.case4} />
      <View style={styles.case5} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  case1: {
    width:100,
    height:100,
    backgroundColor: 'red',
  },
  case2 :{
    width:50,
    height:100,
    backgroundColor: 'green',
  },
  case3 : {
    width:150,
    height: 70,
    backgroundColor: 'blue',
  },
  case4: {
    width:"100%",
    height:70,
    backgroundColor: 'black',
  },
  case5: {
    width:"50%",
    height:"50%",
    backgroundColor: "yellow",
  }
});
