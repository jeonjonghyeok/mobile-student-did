import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import {
  NavigationContainer,
  StackActions,
  DrawerActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import DrawerNavigator from "./Components/Navigator/DrawerNavigator";
import { StatusBar } from "expo-status-bar";
import SigninScreen from "../Screen/SigninScreen";
import MainScreen from "../Screen/MainScreen";
import CertficationScreen from "../Screen/CerificationScreen";
import CompleteScreen from "../Screen/CompleteScreen";

const Stack = createStackNavigator();

function MyStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SigninScreen"
      screenOptions={{
        headerStyle: {
          height: 55,
          backgroundColor: "blue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
      }}
    >
      <Stack.Screen name="CertficationScreen" component={CertficationScreen} />
      <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
    </Stack.Navigator>
  );
}

export default class StackNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer
        screenProps={{
          openDraw: () =>
            this.props.navigation.dispatch(DrawerActions.openDrawer()),
        }}
      >
        <MyStackNavigator />
      </NavigationContainer>
    );
  }
}
