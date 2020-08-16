//Student

import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import MainNavigator from "./Components/Navigator/MainNavigator";
import SigninScreen from "./Components/Screen/SigninScreen";

class App extends React.Component {
  render() {
    return <SigninScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
