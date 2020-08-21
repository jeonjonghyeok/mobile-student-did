import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text>header</Text></View>
      <View style={styles.title}><Text>title</Text></View>
      <View style={styles.content}><Text>content</Text></View>
      <View style={styles.footer}><Text>footer</Text></View>
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
