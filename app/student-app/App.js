//Student

import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./Components/Screen/Loading";
import MainNavigator from "./Components/Navigator/MainNavigator";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };

  render() {
    setTimeout(() => this.setState({ isLoading: false }), 3000);
    const { isLoading } = this.state;

    return isLoading ? <Loading /> : <MainNavigator />;
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
